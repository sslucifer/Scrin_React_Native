//This file is used to implement Navigation between the 5 section/page using Bottom Tab Navigation.
import React from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

//Third Party IMPORT
import Home from "../Pages/Home";
import LiveTv from "../Pages/LiveTv";
import Video from "../Pages/Video";
import Download from "../Pages/Download";
import Settings from "../Pages/Settings";

const TabNavigator = createMaterialBottomTabNavigator(
  {
    //Home is a variable name used for navigation.
    Home: {
      screen: Home, //It is referencing to the Home Page.
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          //The name of the icon is 'home' which is imported from @expo/vector-icons/FontAwesome5.
          <View>
            <FontAwesome5 name="home" size={24} color={tintColor} />
          </View>
        ),
      },
    },
    //LiveTv is a variable name used for navigation.
    LiveTv: {
      screen: LiveTv, //It is referencing to the LiveTv Page.
      navigationOptions: {
        tabBarLabel: "LiveTV",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <MaterialIcons name="ondemand-video" size={24} color={tintColor} />
          </View>
        ),
        activeColor: "#f60c0d",
        inactiveColor: "#f65a22",
        barStyle: { backgroundColor: "#f69b31" },
      },
    },
    Video: {
      screen: Video,
      navigationOptions: {
        tabBarLabel: "VDO",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <FontAwesome5 name="video" size={24} color={tintColor} />
          </View>
        ),
        activeColor: "#615af6",
        inactiveColor: "#46f6d7",
        barStyle: { backgroundColor: "#67baf6" },
      },
    },
    Download: {
      screen: Download,
      navigationOptions: {
        tabBarLabel: "Download",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <FontAwesome5 name="download" size={24} color={tintColor} />
          </View>
        ),
        activeColor: "#415af6",
        inactiveColor: "#66f6d7",
        barStyle: { backgroundColor: "#17baf6" },
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarLabel: "More",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <AntDesign name="appstore1" size={24} color={tintColor} />
          </View>
        ),
        activeColor: "#519af3",
        inactiveColor: "#46f1d9",
        barStyle: { backgroundColor: "steelblue" },
      },
    },
  },
  {
    //Initial page after loading page is Home Page.
    initialRouteName: "Home",
    activeColor: "#f0edf6",
    inactiveColor: "#226557",
    barStyle: { backgroundColor: "#3BAD87" },
  }
);

export default createAppContainer(TabNavigator);
