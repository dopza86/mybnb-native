import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Expolore from "../screens/Auth/Main/Expolore";
import MapScreen from "../screens/Auth/Main/Map";
import Profile from "../screens/Auth/Main/Profile";
import Saved from "../screens/Auth/Main/Saved";
import colors from "../colors";
import utils from "../utils";
import { Ionicons } from "@expo/vector-icons";

const Main = createBottomTabNavigator();

export default () => (
  <Main.Navigator
    tabBarOptions={{
      activeTintColor: colors.red,
      tabStyle: {
        paddingTop: 5,
      },
      labelStyle: { fontWeight: "600" },
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        const isAndroid = utils.isAndroid();
        let iconName = `${isAndroid ? "md-" : "ios-"}`;
        if (route.name === "검색") {
          iconName += "search";
        } else if (route.name === "관심목록") {
          iconName += "heart";
        } else if (route.name === "지도") {
          iconName += "map";
        } else if (route.name === "프로필") {
          iconName += "person";
        }
        return (
          <Ionicons
            name={iconName}
            size={24}
            color={focused ? colors.red : "grey"}
          />
        );
      },
    })}
  >
    <Main.Screen name="검색" component={Expolore}></Main.Screen>
    <Main.Screen name="관심목록" component={Saved}></Main.Screen>
    <Main.Screen name="지도" component={MapScreen}></Main.Screen>
    <Main.Screen name="프로필" component={Profile}></Main.Screen>
  </Main.Navigator>
);
