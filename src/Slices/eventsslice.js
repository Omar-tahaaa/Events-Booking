import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  events: [],
  eventDetails: [],
  bookedEvents: [],
  error: false,
};

export const fetchEvents = createAsyncThunk(
  "eventsSlice/fetchEvents",
  async () => {
    const res = await fetch("http://localhost:3000/events");
    const data = await res.json();
    return data;
  }
);

const eventsSlice = createSlice({
  name: "eventsSlice",
  initialState,
  reducers: {
    setEventDetails: (state, action) => {
      state.eventDetails = action.payload;
    },
    setBookedEvents: (state, action) => {
      state.bookedEvents.push(action.payload);
    },
    filterBookEvents: (state, action) => {
      state.bookedEvents = action.payload;
    },
    editingBookedEvents: (state, action) => {
      state.bookedEvents = action.payload;
    },
    updateEventsWithBooked: (state, action) => {
      state.events = action.payload;
    },
    updateEvents: (state, action) => {
      state.events = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state, action) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        const cloneEvents = action.payload;
        const updatedEventsWithBookedAndTickets = cloneEvents.map((event) => {
          return { ...event, booked: false, tickets: 0 };
        });

        state.events = updatedEventsWithBookedAndTickets;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.error = true;
        state.isLoading = false;
      });
  },
});

export const {
  setEventDetails,
  setBookedEvents,
  updateEventsWithBooked,
  updateEvents,
  filterBookEvents,
  editingBookedEvents,
} = eventsSlice.actions;

export default eventsSlice.reducer;
