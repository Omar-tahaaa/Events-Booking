import styles from "./EventList.module.css";

import Event from "./Event";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import Error from "./Error";

function EventList() {
  const { events, isLoading, error } = useSelector((state) => state.events);

  return (
    <>
      <div className={styles.content}>
        <h2>Upcoming Events in Cairo</h2>
        {isLoading && <Loading />}
        <div className={styles.eventsContainer}>
          {events &&
            events.map((event) => <Event key={event.id} event={event} />)}
        </div>
      </div>
      {error && <Error />}
    </>
  );
}

export default EventList;
