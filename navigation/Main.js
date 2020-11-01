import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Expolore from "../screens/Main/Explore";
import MapScreen from "../screens/Main/Map";
import Profile from "../screens/Main/Profile";
import Saved from "../screens/Main/Saved";
import colors from "../colors";
import utils from "../utils";
import { Ionicons } from "@expo/vector-icons";
import Room from "../screens/Main/Room";
import BackBtn from "../components/Auth/BackBtn";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";

const TabsNavigator = createBottomTabNavigator();

const Tabs = () => (
  <TabsNavigator.Navigator
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
    <TabsNavigator.Screen name="검색" component={Expolore} />
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
    />
    <MainNavigator.Screen
      name="객실보기"
      component={Room}
      options={{
        headerTransparent: true,
        headerBackground: () => (
          <BlurView
            intensity={100}
            tint="light"
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    />
  </MainNavigator.Navigator>
);
