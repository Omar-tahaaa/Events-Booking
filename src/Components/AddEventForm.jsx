import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEvents } from "../Slices/eventsslice";

function AddEventForm() {
  const [event, setEvent] = useState({
    title: "",
    location: "",
    image: "",
    description: "",
    date: "",
    peopleIntersted: "",
    price: "",
    about: "",
  });
  const { events } = useSelector((state) => state.events);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function dispatchingEvents(data) {
    const updateEventWithId = { ...data, tickets: 0 };

    dispatch(updateEvents([...events, updateEventWithId]));

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

  function handleAdd(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/events`, {
      method: "POST",
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
                <h1 className="mb-2 text-center">Add event</h1>

                <form onSubmit={handleAdd}>
                  <div className="form-outline mb-4">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      value={event.title || ""}
                      onChange={handleTitleChange}
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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

export default AddEventForm;
