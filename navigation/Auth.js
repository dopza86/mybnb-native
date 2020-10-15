import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Auth/Welcome";
import SignIn from "../screens/Auth/SignIn";
import SignUp from "../screens/Auth/SignUp";
import { Ionicons } from "@expo/vector-icons";
import { Platform, View } from "react-native";
import BackBtn from "../components/Auth/BackBtn";

const Auth = createStackNavigator();

export default () => (
  <Auth.Navigator
    mode="modal"
    screenOptions={{
      headerBackTitle: false,
      headerTransparent: true,
      headerBackImage: () => <BackBtn />,
    }}
  >
    <Auth.Screen
      name="Welcome"
      component={Welcome}
      options={{
        headerTitleStyle: {
          color: "white",
          alignSelf: "center",
        },
      }}
    />
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);
