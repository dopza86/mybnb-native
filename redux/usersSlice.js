import { createSlice } from "@reduxjs/toolkit";
import api from "../api";
import { setFav, setFavs } from "./roomsSlice";

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoggedIn: false,
    token: null,
    user: [],
    favsPage: 1,
  },
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    logOut(state, action) {
      state.isLoggedIn = false;
      state.token = null;
    },
    me(state, action) {
      state.user = action.payload.user;
    },
  },
});

export const { logIn, logOut, me } = userSlice.actions;
export const userLogin = (form) => async (dispatch) => {
  try {
    const {
      data: { id, token },
    } = await api.login(form);
    if (id && token) {
      dispatch(logIn({ token, id }));
    }
  } catch (e) {
    alert("가입된 회원이 아닙니다");
  }
};

export const getMe = () => async (dispatch, getState) => {
  const {
    usersReducer: { id },
  } = getState();
  try {
    const { data } = await api.isMe(id);
    dispatch(me({ user: data }));
  } catch (e) {
    console.warn(e);
  }
};

export const getFavs = (favsPage) => async (dispatch, getState) => {
  const {
    usersReducer: { id, token },
  } = getState();

  try {
    const { data } = await api.favs(id, token, favsPage);

    dispatch(setFavs({ favs: data, favsPage: favsPage }));
  } catch (e) {
    console.warn(e);
  }
};

export const toggleFav = (roomId) => async (dispatch, getState) => {
  const {
    usersReducer: { id, token },
  } = getState();
  dispatch(setFav({ roomId }));
  try {
    await api.toggleFavs(id, roomId, token);
  } catch (e) {
    console.warn(e);
  }
};

export default userSlice.reducer;
