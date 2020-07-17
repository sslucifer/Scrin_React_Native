import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { CheckBox, Button, SocialIcon, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { SafeAreaView } from "react-native-safe-area-context";

import WebViewExample from "./Policy_Modal";

const AlertExample = () => {
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ],
    { cancelable: true }
  );
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: "eye-slash",
      password: true,
      checked: false,
    };
  }

  change() {
    this.setState((prevState) => ({
      icon: prevState.icon == "eye" ? "eye-slash" : "eye",
      password: !prevState.password,
    }));
  }
  static navigationOptions = {
    title: "Login",
    headerStyle: {
      backgroundColor: "#03A9F4",
    },
  };
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <ImageBackground
              source={require("../../assets/yellow.jpeg")}
              style={styles.image}
              imageStyle={{ opacity: 0.5 }}
            >
              <Input
                containerStyle={{ width: "65%" }}
                inputStyle={{ color: "white" }}
                inputContainerStyle={{ opacity: 0.8 }}
                placeholder="Email"
                underlineColorAndroid="transparent"
                keyboardType="email-address"
                autoCapitalize="none"
                rightIcon={<Icon name="envelope" size={15} color="white" />}
              />
              <Input
                containerStyle={{ width: "65%" }}
                inputStyle={{ color: "white" }}
                inputContainerStyle={{ opacity: 0.8 }}
                placeholder="Password"
                underlineColorAndroid="transparent"
                keyboardType="default"
                secureTextEntry={this.state.password}
                autoCapitalize="none"
                rightIcon={
                  <Icon
                    name={this.state.icon}
                    onPress={() => this.change()}
                    size={18}
                    color="white"
                  />
                }
              />

              <Button
                buttonStyle={{
                  backgroundColor: "gold",
                  borderRadius: 20,
                  margin: "5%",
                  width: 200,
                  paddingHorizontal: 15,
                }}
                icon={{
                  name: "user",
                  color: "black",
                  size: 18,
                  type: "font-awesome",
                }}
                title="Login"
                titleStyle={{
                  color: "black",
                  textAlign: "center",
                  textAlignVertical: "center",
                }}
              />

              <View style={styles.containR}>
                <Text style={{ fontSize: 18, color: "white" }}>
                  No account yet ? Create one{" "}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("Sign_Up");
                  }}
                >
                  <Text
                    style={{
                      color: "#90caf9",
                      fontSize: 18,
                      fontStyle: "italic",
                      textDecorationLine: "underline",
                    }}
                  >
                    here.
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.containR}>
                <View
                  style={{
                    flex: 1,
                    height: 1,
                    backgroundColor: "white",
                    marginHorizontal: 10,
                    opacity: 0.5,
                  }}
                />

                <Text style={styles.separator}>OR</Text>

                <View
                  style={{
                    flex: 1,
                    height: 1,
                    backgroundColor: "white",
                    marginHorizontal: 10,
                    opacity: 0.5,
                  }}
                />
              </View>

              <View style={styles.containC}>
                <SocialIcon
                  button
                  style={{ paddingHorizontal: 10, borderRadius: 5, margin: 10 }}
                  onPress={AlertExample}
                  title="Sign In With Facebook"
                  type="facebook"
                />

                <SocialIcon
                  button
                  style={{ paddingHorizontal: 10, borderRadius: 5, margin: 10 }}
                  onPress={AlertExample}
                  title=" Sign In With Google "
                  type="google"
                />
              </View>

              <View
                style={{
                  marginTop: 5,
                  flexDirection: "column",
                  alignItems: "center",
                  opacity: 0.8,
                }}
              >
                <CheckBox
                  title="I agree to Privacy Policy."
                  textStyle={{ color: "white", fontSize: 20 }}
                  containerStyle={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                    opacity: 0.9,
                  }}
                  checkedIcon={
                    <Icon name="toggle-on" size={28} color="#90caf9" />
                  }
                  uncheckedIcon={
                    <Icon name="toggle-off" size={28} color="#e3f2fd" />
                  }
                  checked={this.state.checked}
                  onPress={() =>
                    this.setState({ checked: !this.state.checked })
                  }
                />

                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  {/* <Text style={{fontSize:15,
                        color:"#18ffff",
                        fontStyle:'italic',
                        textDecorationLine:'underline'}} 
                onPress={AlertExample}>Touch Here</Text> */}
                  <WebViewExample />

                  <Text style={{ fontSize: 15, color: "white" }}>
                    {" "}
                    to see Privacy Policy.
                  </Text>
                </View>
              </View>
            </ImageBackground>

            <StatusBar barStyle="dark-content" hidden={true} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  containR: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containC: {
    margin: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flexDirection: "column",
    height: "100%",
    width: "100%",
    //opacity:0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  separator: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "monospace",
    opacity: 0.5,
  },
});
// import React, { Component } from "react";

// import {
//   Keyboard,
//   Text,
//   View,
//   TextInput,
//   TouchableWithoutFeedback,
//   Alert,
//   KeyboardAvoidingView,
//   StyleSheet,
// } from "react-native";
// import { Button } from "react-native-elements";
// import { SafeAreaView } from "react-native-safe-area-context";
// const appId = "1047121222092614";

// export default class Login_Page extends Component {
//   render() {
//     return (
//       <SafeAreaView>
//         <KeyboardAvoidingView style={styles.containerView} behavior="padding">
//           <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//             <View style={styles.loginScreenContainer}>
//               <View style={styles.loginFormView}>
//                 <Text style={styles.logoText}>Instamobile</Text>
//                 <TextInput
//                   placeholder="Username"
//                   placeholderColor="#c4c3cb"
//                   style={styles.loginFormTextInput}
//                 />
//                 <TextInput
//                   placeholder="Password"
//                   placeholderColor="#c4c3cb"
//                   style={styles.loginFormTextInput}
//                   secureTextEntry={true}
//                 />
//                 <Button
//                   buttonStyle={styles.loginButton}
//                   onPress={() => this.onLoginPress()}
//                   title="Login"
//                 />
//                 <Button
//                   buttonStyle={styles.fbLoginButton}
//                   onPress={() => this.onFbLoginPress()}
//                   title="Login with Facebook"
//                   color="#3897f1"
//                 />
//               </View>
//             </View>
//           </TouchableWithoutFeedback>
//         </KeyboardAvoidingView>
//       </SafeAreaView>
//     );
//   }

//   componentDidMount() {}

//   componentWillUnmount() {}

//   onLoginPress() {}

//   async onFbLoginPress() {
//     const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
//       appId,
//       {
//         permissions: ["public_profile", "email"],
//       }
//     );
//     if (type === "success") {
//       const response = await fetch(
//         `https://graph.facebook.com/me?access_token=${token}`
//       );
//       Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
//     }
//   }
// }
// const styles = StyleSheet.create({
//   containerView: {
//     flex: 1,
//   },
//   loginScreenContainer: {
//     flex: 1,
//   },
//   logoText: {
//     fontSize: 40,
//     fontWeight: "800",
//     marginTop: 150,
//     marginBottom: 30,
//     textAlign: "center",
//   },
//   loginFormView: {
//     flex: 1,
//   },
//   loginFormTextInput: {
//     height: 43,
//     fontSize: 14,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: "#eaeaea",
//     backgroundColor: "#fafafa",
//     paddingLeft: 10,
//     marginLeft: 15,
//     marginRight: 15,
//     marginTop: 5,
//     marginBottom: 5,
//   },
//   loginButton: {
//     backgroundColor: "#3897f1",
//     borderRadius: 5,
//     height: 45,
//     marginTop: 10,
//   },
//   fbLoginButton: {
//     height: 45,
//     marginTop: 10,
//     backgroundColor: "transparent",
//   },
// });
// // import React from "react";
// // import { StyleSheet, Text, View } from "react-native";
// // import { SafeAreaView } from "react-native-safe-area-context";

// // export default class Login_Page extends React.Component {
// //   render() {
// //     return (
// //       <SafeAreaView>
// //         <View style={styles.container}>
// //           <Text>Login_Page!!</Text>
// //         </View>
// //       </SafeAreaView>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#fff",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// // });
