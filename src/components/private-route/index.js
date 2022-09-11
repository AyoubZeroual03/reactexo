import { Navigate } from "react-router-dom";
export const PrivateRoute = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("admin"));
  if (token) {
    return children;
  } else {
    return <Navigate to="/auth/login" />;
  }
};
