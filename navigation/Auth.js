import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import { Ionicons } from "@expo/vector-icons";
import { Platform, View } from "react-native";

const Auth = createStackNavigator();
const isAndroid = Platform.OS === "android";
export default () => (
  <Auth.Navigator
    mode="modal"
    screenOptions={{
      headerBackTitleVisible: false,
      headerTransparent: true,
      headerBackImage: () => (
        <View styles={{ paddingLeft: 20 }}>
          <Ionicons
            name={isAndroid ? "md-arrow-down" : "ios-arrow-down"}
            size={28}
          />
        </View>
      ),
    }}
  >
    <Auth.Screen name="Welcome" component={Welcome} />
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);
