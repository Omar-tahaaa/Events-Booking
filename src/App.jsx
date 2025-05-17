import { Route, Routes } from "react-router-dom";
import AppLayout from "./Pages/AppLayout";
import HomePage from "./Pages/HomePage";
import Events from "./Components/Events";
import EventDetails from "./Components/EventDetails";
import EventList from "./Components/EventList";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchEvents } from "./Slices/eventsslice";
import Booked from "./Components/Booked";
import Congratulations from "./Components/Congratulations";
import Login from "./Components/AuthForms/Login";
import SignUp from "./Components/AuthForms/SignUp";
import EditEventForm from "./Components/EditEventForm";
// import { fetchEvents } from "../Slices/eventsslice";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import AddEventForm from "./Components/AddEventForm";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<Events />}>
          <Route index element={<EventList />} />
          <Route path="event-details/:id" element={<EventDetails />} />
          <Route path="booked" element={<Booked />} />
          <Route path="edit-event/:id" element={<EditEventForm />} />
          <Route path="add-event" element={<AddEventForm />} />
        </Route>
        <Route path="congratulations" element={<Congratulations />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
