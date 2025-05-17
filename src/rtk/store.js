import { configureStore } from "@reduxjs/toolkit";

import eventsReducer from "../Slices/eventsslice";

const store = configureStore({
  reducer: {
    events: eventsReducer,
  },
});

export default store;
