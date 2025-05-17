import { useNavigate, useParams } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editingBookedEvents, updateEvents } from "../Slices/eventsslice";

function EditEventForm() {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const { events, bookedEvents } = useSelector((state) => state.events);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:3000/events/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, [id]);

  function dispatchingEvents(event) {
    const clonedEvents = events.map((ev) => {
      if (ev.id === event.id) {
        return event;
      } else {
        return ev;
      }
    });
    dispatch(updateEvents(clonedEvents));

    const clonedBookedEvents = bookedEvents.map((ev) => {
      if (ev.id === event.id) {
        return event;
      } else {
        return ev;
      }
    });
    dispatch(editingBookedEvents(clonedBookedEvents));

    navigate("/events");
  }

  function handleTitleChange(e) {
    setEvent({
      ...event,
      title: e.target.value,
    });
  }

  function handlePriceChange(e) {
    setEvent({
      ...event,
      price: e.target.value,
    });
  }

  function handleDescChange(e) {
    setEvent({
      ...event,
      description: e.target.value,
    });
  }
  function handleAboutChange(e) {
    setEvent({
      ...event,
      about: e.target.value,
    });
  }
  function handleImageChange(e) {
    setEvent({
      ...event,
      image: e.target.value,
    });
  }
  function handleLocationChange(e) {
    setEvent({
      ...event,
      location: e.target.value,
    });
  }
  function handleDateChange(e) {
    setEvent({
      ...event,
      date: e.target.value,
    });
  }
  function handlePeopleInterstedChange(e) {
    setEvent({
      ...event,
      peopleIntersted: e.target.value,
    });
  }

  function handleEdit(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/events/${id}`, {
      method: "PUT",
      body: JSON.stringify(event),
    })
      .then((res) => res.json())
      .then((data) => dispatchingEvents(data));
  }

  return (
    <div className="mask d-flex align-items-center h-100 mt-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5">
                <h1 className="mb-2 text-center">Edit event</h1>

                <form onSubmit={handleEdit}>
                  <div className="form-outline mb-4">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      value={event.title || ""}
                      onChange={handleTitleChange}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label">Price</label>
                    <input
                      type="number"
                      min={1}
                      className="form-control"
                      id="price"
                      value={event.price || ""}
                      onChange={handlePriceChange}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label">PeopleIntersted</label>
                    <input
                      type="number"
                      min={1}
                      className="form-control"
                      id="peopleIntersted"
                      value={event.peopleIntersted || ""}
                      onChange={handlePeopleInterstedChange}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label">Image URL</label>
                    <input
                      type="text"
                      className="form-control"
                      id="image"
                      value={event.image || ""}
                      onChange={handleImageChange}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label">Location</label>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      value={event.location || ""}
                      onChange={handleLocationChange}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label">Date</label>
                    <input
                      type="text"
                      className="form-control"
                      id="date"
                      value={event.date || ""}
                      onChange={handleDateChange}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      id="desc"
                      rows="3"
                      value={event.description || ""}
                      onChange={handleDescChange}
                    ></textarea>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label">About</label>
                    <textarea
                      className="form-control"
                      id="about"
                      rows="3"
                      value={event.about || ""}
                      onChange={handleAboutChange}
                    ></textarea>
                  </div>

                  <div className="form-check d-flex justify-content-center ">
                    <button type="submit" className="btn btn-success">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditEventForm;
