import { NavLink } from "react-router-dom";
import styless from "./AppNav.module.css";
import Logo from "./Logo";

import useAuth from "./AuthForms/useAuthHook";
import { logout } from "./AuthForms/logout";

function AppNav() {
  const { currentUser } = useAuth();

  const handleLogout = () => {
    logout();
  };
  return (
    <div className={styless.nav}>
      <div className={styless.imgContainer}>
        <Logo />
      </div>
      <div className={styless.list}>
        <ul>
          <li>{!currentUser && <NavLink to="/signup">SignUp</NavLink>}</li>
          <li>
            {currentUser ? (
              <NavLink onClick={handleLogout}>Logout</NavLink>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AppNav;
