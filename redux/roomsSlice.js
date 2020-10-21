import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
  name: "rooms",
  initialState: {
    expolore: {
      page: 1,
      rooms: [],
    },
    page: 1,
    favs: [],
  },
  reducers: {
    setExpoloreRooms(state, action) {
      state.expolore.rooms.push(action.payload.rooms);
      state.expolore.page = action.payload.page;
    },
  },
});

const { setExpoloreRooms } = roomSlice.actions;
export default roomSlice.reducer;
