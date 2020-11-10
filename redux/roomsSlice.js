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
    onMapRooms: [],
  },
  reducers: {
    setExploreRooms(state, action) {
      const { payload } = action;
      if (payload.page === 1) {
        state.explore.rooms = payload.rooms;
        state.explore.page = 1;
      } else {
        state.explore.rooms = [...state.explore.rooms, ...payload.rooms];
      }
    },
    increasePage(state, action) {
      state.explore.page += 1;
    },

    setFavs(state, action) {
      if (action.payload.favsPage === 1) {
        state.favs = action.payload.favs.results;
        state.favsPage = 1;
      } else {
        state.favs = [...state.favs, ...action.payload.favs.results];
      }
    },
    increaseFavsPage(state, action) {
      state.favsPage += 1;
    },
    setFav(state, action) {
      const {
        payload: { roomId },
      } = action;
      const room = state.explore.rooms.find((room) => room.id === roomId);
      if (room) {
        if (room.is_fav) {
          room.is_fav = false;
          state.favs = state.favs.filter((room) => room.id !== roomId);
          alert("관심목록에서 제거 되었습니다");
        } else {
          room.is_fav = true;
          state.favs = [room, ...state.favs];
          alert("관심목록에 추가 되었습니다");
        }
      }
    },
  },
});

export const {
  setExploreRooms,
  increasePage,
  setFavs,
  setFav,
  increaseFavsPage,
  setOnMapRooms,
} = roomsSlice.actions;

export const getRooms = (page) => async (dispatch, getState) => {
  const {
    usersReducer: { token },
  } = getState();
  try {
    const {
      data: { results },
    } = await api.rooms(page, token);
    dispatch(
      setExploreRooms({
        rooms: results,
        page,
      })
    );
  } catch (e) {
    console.warn(e);
  }
};

export default roomsSlice.reducer;
