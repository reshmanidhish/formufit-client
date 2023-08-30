import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Navigate } from "react-router-dom";
import Loading from "../Loading/Loading";

function IsAnon({ children }) {
  const { isLoggedIn, user, isLoading } = useContext(AuthContext);

  // If the authentication is still loading ⏳
  if (isLoading) {
    return <Loading />;
  }

  if (isLoggedIn) {
    // If the user is logged in, navigate to home page ❌
    if(user.bodyType === 0) {
      return <Navigate to="/questionare" />;
    }
    return <Navigate to="/dashboard" />;
  }

  // If the user is not logged in, allow to see the page ✅
  return children;
}

export default IsAnon;
