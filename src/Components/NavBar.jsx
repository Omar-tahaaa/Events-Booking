import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

import useAuth from "./AuthForms/useAuthHook";
import { logout } from "./AuthForms/logout";
import { useSelector } from "react-redux";
function NavBar() {
  const { events } = useSelector((state) => state.events);

  const tickets = events.reduce((acc, event) => (acc += event.tickets), 0);

  const { currentUser } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className={styles.navbar}>
      {currentUser && <p>{`Tickets(${tickets})`}</p>}

      {currentUser ? (
        <Link onClick={handleLogout}>logout</Link>
      ) : (
        <Link to="/login">logIn</Link>
      )}
    </nav>
  );
}

export default NavBar;
