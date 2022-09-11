import { Link, Outlet, useNavigate } from "react-router-dom";

import { logout } from "../../../services/auth.service";

import "./style.css";

export const AdminLayout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    if (logout()) {
      navigate("/");
    } else {
      alert("error while logging out");
    }
  };
  return (
    <div className="container-fluid content-wrapper">
      <div className="row">
        <div className="col-md-2 sidebar">
          <h3>Admin dashboard</h3>
          <ul className="list">
            <li>
              <Link to="/admin/users">users</Link>
            </li>
            <li>
              <Link to="/admin/posts">posts</Link>
            </li>
            <li>
              <button
                className="btn btn-primary"
                onClick={() => handleLogout()}
              >
                logout
              </button>
            </li>
          </ul>
        </div>
        <div className="col-md-10 content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
