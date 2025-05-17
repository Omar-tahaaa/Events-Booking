import { useSelector } from "react-redux";
import styles from "./Booked.module.css";
import BookedEvents from "./BookedEvents";
import useAuth from "./AuthForms/useAuthHook";
import { Link } from "react-router-dom";

function Booked() {
  const { currentUser } = useAuth();
  let { bookedEvents } = useSelector((state) => state.events);

  if (!currentUser) {
    return (
      <div className={styles.container}>
        <p>
          login to see booked events <Link to="/login">login</Link>
        </p>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <h1>Booked Events</h1>
      {bookedEvents.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Location</th>
              <th>Date</th>
              <th>price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookedEvents.length > 0 &&
              bookedEvents.map((event) => (
                <BookedEvents key={event.id} event={event} />
              ))}
          </tbody>
        </table>
      ) : (
        <p>no events booked</p>
      )}
    </div>
  );
}

export default Booked;
