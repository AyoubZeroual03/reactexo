import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/private-route";
import HomePage from "./pages";
import AboutPage from "./pages/about";
import AdminPage from "./pages/admin";
import AdminPostsPage from "./pages/admin/posts";
import AdminUsersPage from "./pages/admin/users";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import NotFoundPage from "./pages/errors/404";
import PostsPage from "./pages/posts";
import PostDetailsPage from "./pages/posts/_id";
import "./styles.css";
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <AboutPage />
              </PrivateRoute>
            }
          />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:id" element={<PostDetailsPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminPage />
              </PrivateRoute>
            }
          >
            {/* <Route path="" /> */}
            <Route path="users" element={<AdminUsersPage />} />
            <Route path="posts" element={<AdminPostsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}
