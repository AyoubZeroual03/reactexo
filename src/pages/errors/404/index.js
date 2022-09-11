import { useNavigate } from "react-router-dom";
import "./style.css";
const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div class="container-fluid wrapper">
      <div>
        <h1>Not found page</h1>
        <p>Click the button bellow to return to home page</p>
        <button onClick={() => navigate("/")}>Return</button>
      </div>
    </div>
  );
};

export default NotFoundPage;
