import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Auth from "../navigation/Auth";
import Main from "../navigation/Main";

export default () => {
  const { isLoggedIn } = useSelector((state) => state.usersReducer);

  return (
    <NavigationContainer>
      {isLoggedIn ? <Main /> : <Auth />}
    </NavigationContainer>
  );
};
