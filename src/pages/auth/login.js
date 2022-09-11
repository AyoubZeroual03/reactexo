import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../helpers/validations";
import { HomeLayout } from "../../components/layouts/home";
import { login } from "../../services/auth.service";
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema)
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    //// appel le service
    const { email, password } = data;
    if (login({ email, password })) {
      navigate("/admin/posts");
    } else {
      alert("inccorect credential");
    }
  };

  return (
    <HomeLayout>
      <h1>Login to your account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="enter your email"
            id="email"
            {...register("email")}
          />
        </div>
        <p className="text-danger">{errors.email?.message}</p>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="enter your password"
            id="password"
            {...register("password")}
          />
        </div>
        <p className="text-danger">{errors.password?.message}</p>

        <button className="btn btn-primary" type="submit">
          login
        </button>
      </form>
    </HomeLayout>
  );
};

export default LoginPage;
