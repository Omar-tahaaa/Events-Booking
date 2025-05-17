import styles from "./EventDetails.module.css";
import { FaStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  setBookedEvents,
  setEventDetails,
  updateEventsWithBooked,
} from "../Slices/eventsslice";

import Swal from "sweetalert2";
import useAuth from "./AuthForms/useAuthHook";

function EventDetails() {
  const { currentUser } = useAuth();
  const { events } = useSelector((state) => state.events);
  const { eventDetails } = useSelector((state) => state.events);
  const navigate = useNavigate();

  if (eventDetails) {
    var {
      tickets,
      image,
      title,
      description,
      location,
      about,
      date,
      peopleIntersted,
      price,
    } = eventDetails;
  }

  const dispatch = useDispatch();

  const { id } = useParams();
  const eventD = events.find((event) => event.id === id);

  useEffect(() => {
    dispatch(
      //changing src beacause src= ../src/assets/image{id}.png doesn't for reason i dont know
      setEventDetails({ ...eventD, image: `/src/assets/image${id}.png` })
    );
  }, [events, dispatch]);

  const { bookedEvents } = useSelector((state) => state.events);

  function handleBooking(e) {
    function submitingBookTicket() {
      e.preventDefault();
      let foundedEventInBooking = bookedEvents.find(
        (booked) => booked.id === eventDetails.id
      );
      if (foundedEventInBooking) {
        const clonedEvents = events.map((ev) => {
          if (ev.id === eventDetails.id) {
            return { ...ev, tickets: tickets + 1 };
          } else {
            return ev;
          }
        });

        dispatch(updateEventsWithBooked(clonedEvents));
        return;
      }
      dispatch(setBookedEvents({ ...eventDetails, booked: true }));
      const clonedEvents = events.map((ev) => {
        if (ev.id === eventDetails.id) {
          return { ...ev, booked: true, tickets: 1 };
        } else {
          return ev;
        }
      });
      dispatch(updateEventsWithBooked(clonedEvents));
    }

    Swal.fire({
      title: "Good job!",
      text: "You Booked 1 ticket",
      icon: "success",
    }).then(async (result) => {
      if (result.isConfirmed) {
        submitingBookTicket();
        navigate("/congratulations");
      }
    });
  }

  return (
    <>
      {eventDetails && (
        <div className={styles.event}>
          <div className={styles.eventImageContainer}>
            <img src={image} alt={title} />
          </div>
          <div className={styles.eventDetails}>
            <span className={styles.eventCatagory}>Host: {description}</span>
            <h4>
              <a href="">{title}</a>
            </h4>
            <span className={styles.eventCatagory}>
              <CiLocationOn /> {location}
            </span>

            <p>{about}</p>
            <span className={styles.eventCatagory}>
              <FaRegCalendarAlt /> {date}
            </span>
            <span className={styles.eventCatagory}>
              <FaStar /> {peopleIntersted} people interstesd
            </span>
            <div className={styles.eventPrice}>${price}</div>
            <div className={styles.buttonContainer}>
              {currentUser ? (
                <button
                  className={`${styles.button} ${styles.unBooked}`}
                  onClick={handleBooking}
                >
                  Book Now
                </button>
              ) : (
                <p>
                  you must login to book tickets{" "}
                  <Link to="/login">login from here</Link>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EventDetails;
