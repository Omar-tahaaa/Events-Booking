import NavBar from "./NavBar";
import SideBar from "./SideBar";
import styles from "./Events.module.css";
import { Outlet } from "react-router-dom";

function Events() {
  return (
    <div className={styles.wrapper}>
      <SideBar />
      <div className={styles.mainPage}>
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default Events;
