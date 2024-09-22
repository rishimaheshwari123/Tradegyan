import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function OpenRoute({ children }) {
  const { token, user } = useSelector((state) => state.auth);

  if (!token) {
    return children;
  } else if (user.role === "Admin") {
    return <Navigate to="/admin/dashboard" />;
  } else if (user.role === "user") {
    return <Navigate to="/" />;
  }

  return <Navigate to="/login" />;
}

export default OpenRoute;
