import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Auth from "../navigation/Auth";
import { logIn, logOut } from "../redux/usersSlice";

export default () => {
  const { isLoggedIn } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <TouchableOpacity onPress={() => dispatch(logOut())}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      ) : (
        <Auth />
      )}
    </NavigationContainer>
  );
};
