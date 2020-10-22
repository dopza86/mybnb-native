import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const roomsSlice = createSlice({
  name: "rooms",
  initialState: {
    explore: {
      page: 1,
      rooms: [],
    },
    favs: [],
  },
  reducers: {
    setExploreRooms(state, action) {
      state.explore.rooms.push(action.payload.rooms);
      state.explore.page = action.payload.page;
    },
  },
});

const { setExploreRooms } = roomsSlice.actions;

export const getRooms = () => async (dispatch) => {
  try {
    const { data } = await api.rooms();
    console.log(data);
  } catch (e) {}
};

export default roomsSlice.reducer;
