"use strict";
//import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, ImageBackground, StyleSheet, Text, View } from "react-native";
import { CheckBox, Button, SocialIcon, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import ValidationComponent from "react-native-form-validator";

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

export default class App extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      icon: "eye-slash",
      password: true,
      checked: false,
      Email: "",
      Password: "",
    };
  }

  change() {
    this.setState((prevState) => ({
      icon: prevState.icon == "eye" ? "eye-slash" : "eye",
      password: !prevState.password,
    }));
  }

  async _onPressButton() {
    // Call ValidationComponent validate method
    this.validate({
      Email: { email: true, required: true },
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/yellow.jpeg")}
          style={styles.image}
          imageStyle={{ opacity: 0.5 }}
        >
          <Input
            containerStyle={{ width: 250 }}
            inputStyle={{ color: "white" }}
            inputContainerStyle={{ opacity: 0.8 }}
            placeholder="Email"
            underlineColorAndroid="transparent"
            keyboardType="email-address"
            autoCapitalize="none"
            rightIcon={<Icon name="envelope" size={15} color="white" />}
            onChangeText={(Email) => this.setState({ Email })}
            value={this.state.Email}
          />

          <Input
            containerStyle={{ width: 250 }}
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
            onChangeText={(Password) => this.setState({ Password })}
            value={this.state.Password}
          />
          <Text>{this.getErrorMessages()}</Text>

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
            titleStyle={{ color: "black" }}
            // {this._onPressButton.bind(this)}
            onPress={this._onPressButton.bind(this)}
          />

          <View style={styles.containR}>
            <Text style={{ fontSize: 18, color: "white" }}>
              No account yet ? Create one{" "}
            </Text>
            <Text
              style={{
                color: "#90caf9",
                fontSize: 18,
                fontStyle: "italic",
                textDecorationLine: "underline",
              }}
              onPress={AlertExample}
            >
              here.
            </Text>
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
              marginTop: 50,
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
              checkedIcon={<Icon name="toggle-on" size={28} color="#90caf9" />}
              uncheckedIcon={
                <Icon name="toggle-off" size={28} color="#e3f2fd" />
              }
              checked={this.state.checked}
              onPress={() => this.setState({ checked: !this.state.checked })}
            />

            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text
                style={{
                  fontSize: 15,
                  color: "#18ffff",
                  fontStyle: "italic",
                  textDecorationLine: "underline",
                }}
                onPress={AlertExample}
              >
                Touch Here
              </Text>

              <Text style={{ fontSize: 15, color: "white" }}>
                {" "}
                to see Privacy Policy.
              </Text>
            </View>
          </View>
        </ImageBackground>

        {/* <StatusBar barStyle="dark-content" hidden={true} /> */}
      </View>
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
