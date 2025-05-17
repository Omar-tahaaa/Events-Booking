import styles from "./SideBar.module.css";
import eventsLogo from "../assets/eventsLogo.png";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { LuTicketCheck } from "react-icons/lu";
import { BsCalendarEvent } from "react-icons/bs";
function SideBar() {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <img src={eventsLogo} alt="events" />
      </div>
      <ul className={styles.components}>
        <li>
          <NavLink to="/">
            <FaHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/events">
            <BsCalendarEvent /> Events
          </NavLink>
        </li>
        <li>
          <NavLink to="booked">
            <LuTicketCheck /> Boooking
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
