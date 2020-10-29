import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoggedIn: false,
    token: null,
  },
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    logOut(state, action) {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export const userLogin = (form) => async (dispatch) => {
  try {
    const {
      data: { id, token },
    } = await api.login(form);
    if (id && token) {
      dispatch(logIn({ token }));
    }
  } catch (e) {
    console.log(e);
    alert("가입된 회원이 아닙니다");
  }
};

export const getFavs = () => async (dispatch, getState) => {
  const {
    usersReducer: { id },
  } = getState();
  try {
    const { data } = await api.favs(id);
    console.log(data);
  } catch (e) {
    console.warn(e);
  }
};

export const toggleFavs = (roomId) => async (dispatch, getState) => {
  const {
    usersReducer: { id, token },
  } = getState();
  console.log(roomId, id, token);
};

export default userSlice.reducer;
