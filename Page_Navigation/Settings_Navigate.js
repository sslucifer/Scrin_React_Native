//This file is used to Navigate in Settings Page.
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import More from "../Pages/Settings";
import About_Us from "../Pages/Settings_Option/About_Us";
import Login from "../Pages/Settings_Option/Login";
import Policy from "../Pages/Settings_Option/Policy";
import Rate_Us from "../Pages/Settings_Option/Rate_Us";
import Share from "../Pages/Settings_Option/Share";
import Subscribe from "../Pages/Settings_Option/Subscribe";
import Sign_Up from "../Pages/Settings_Option/Sign_Up";
//By default the initial page/screen is Settings.
const screens = {
  More: {
    screen: More,
  },
  Login: {
    screen: Login,
  },
  Sign_Up: {
    screen: Sign_Up,
  },
  // About_Us: {
  //   screen: About_Us,
  // },
  Policy: {
    screen: Policy,
  },
  // Rate_Us: {
  //   screen: Rate_Us,
  // },
  // Share: {
  //   screen: Share,
  // },
  // Subscribe: {
  //   screen: Subscribe,
  // },
};
const stack = createStackNavigator(screens);
export default createAppContainer(stack);
