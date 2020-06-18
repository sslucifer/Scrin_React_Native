import React from "react";
import * as SplashScreen from "expo-splash-screen";
import Home_Page_Nav from "./Page_Navigation/Home_Navigate";

//Here loading page is refered as splashscreen in react-native.
SplashScreen.preventAutoHideAsync();

export default class App extends React.Component {
  componentDidMount() {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 2000); // Duration of Loading screen 2000ms and can be changed.
  }

  render() {
    return <Home_Page_Nav />;
  }
}
// There are 5 main section/pages which can be found under Pages folder:
// 1) Home
// 2) LiveTv
// 3) Video
// 4) Download
// 5) Settings
