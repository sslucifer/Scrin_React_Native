//This file is used to Navigate in Settings Page.
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Login from "../Pages/Settings_Option/Login";
import Sign_Up from "../Pages/Settings_Option/Sign_Up";

const screens = {
  Login: {
    screen: Login,
  },
  Sign_Up: {
    screen: Sign_Up,
  },
};

const stack = createStackNavigator(screens);
export default createAppContainer(stack);
