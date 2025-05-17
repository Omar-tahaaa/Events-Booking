import styles from "./Event.module.css";
import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import { Link } from "react-router-dom";
import useAuth from "./AuthForms/useAuthHook";

function Event({ event }) {
  const { currentUser } = useAuth();
  const { id, image, title, location, date, peopleIntersted, booked, tickets } =
    event;
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.box}>
          <Link to={`event-details/${id}`}>
            <img className={styles.image} src={image} alt={title} />

            <h3 className={styles.title}>{title}</h3>
            <p className={styles.location}>
              <CiLocationOn /> {location}
            </p>

            <div className={styles.dateBox}>
              <p className={styles.date}>
                <FaRegCalendarAlt /> {date}
              </p>
              <p className={styles.intersted}>
                <FaStar /> {peopleIntersted} Intersted
              </p>
            </div>

            <button
              className={`${styles.button} ${
                booked && currentUser ? styles.booked : styles.unBooked
              }`}
            >
              {booked && currentUser
                ? `booked with ${tickets} Ticket`
                : "Book Now "}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Event;
