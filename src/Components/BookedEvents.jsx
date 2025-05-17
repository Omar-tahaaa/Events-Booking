import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateEvents, filterBookEvents } from "../Slices/eventsslice";
import { IoAddCircle } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { MdDelete, MdOutlinePreview } from "react-icons/md";

import Swal from "sweetalert2";


function BookedEvents({ event }) {

  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.events);
  const { bookedEvents } = useSelector((state) => state.events);

  if (event) {
    var { id, title, location, date, price } = event;
  }

  const fetchNewEevnts = (deletedEvent) => {
    const newEvents = events.filter((event) => event.id !== deletedEvent.id);

    const filterdBookedEvents = bookedEvents.filter((event) => event.id !== id);

    dispatch(updateEvents(newEvents));

    dispatch(filterBookEvents(filterdBookedEvents));
  };

  const handleDeletingEvent = (e, id) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "This event will be deleted from page",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout me!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await fetch(`http://localHost:3000/events/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => fetchNewEevnts(data));
        } catch (error) {
          throw new Error(error);
        }
      }
    });
  };

  return (
    <tr>
      <td>{title}</td>
      <td>{location}</td>
      <td>{date}</td>
      <td>{price}</td>
      <td>
        <Link to={"/events/add-event"}>
          <IoAddCircle />
        </Link>
        <Link to={`/events/edit-event/${id}`}>
          <CiEdit />
        </Link>
        <Link to={`/events/event-details/${id}`}>
          <MdOutlinePreview />
        </Link>
        <Link onClick={(e) => handleDeletingEvent(e, id)}>
          <MdDelete />
        </Link>
      </td>
    </tr>
  );
}

export default BookedEvents;
