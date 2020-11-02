import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import Explore from "../screens/Main/Explore";
import Saved from "../screens/Main/Saved";
import MapScreen from "../screens/Main/Map";
import Profile from "../screens/Main/Profile";
import colors from "../colors";
import utils from "../utils";
import BackBtn from "../components/Auth/BackBtn";
import Room from "../screens/Main/Room";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";

const TabsNavigator = createBottomTabNavigator();

const Tabs = () => (
  <TabsNavigator.Navigator
    tabBarOptions={{
      activeTintColor: colors.red,
      tabStyle: {
        paddingTop: 10,
      },
      labelStyle: {
        textTransform: "uppercase",
        fontWeight: "600",
      },
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
    <TabsNavigator.Screen name="검색" component={Explore} />
    <TabsNavigator.Screen name="관심목록" component={Saved} />
    <TabsNavigator.Screen name="지도" component={MapScreen} />
    <TabsNavigator.Screen name="프로필" component={Profile} />
  </TabsNavigator.Navigator>
);

const MainNavigator = createStackNavigator();
export default () => (
  <MainNavigator.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
      headerBackImage: () => <BackBtn />,
    }}
  >
    <MainNavigator.Screen
      name="Tabs"
      component={Tabs}
      options={{ headerShown: false }}
    ></MainNavigator.Screen>
    <MainNavigator.Screen
      name="객실보기"
      component={Room}
    ></MainNavigator.Screen>
  </MainNavigator.Navigator>
);
