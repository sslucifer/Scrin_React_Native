import React from "react";
import {
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Alert,
  TouchableOpacity,
  _ScrollView,
  Dimensions,
} from "react-native";
import { CheckBox, Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

const { width, height } = Dimensions.get("window");
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
  constructor() {
    super();
    this.state = {
      checked: false,
    };
  }
  static navigationOptions = {
    title: "Sign_Up",
    headerStyle: {
      backgroundColor: "#03A9F4",
    },
    headerShown: false,
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={require("../../assets/dosarlogo.png")}
          style={styles.logo}
          resizeMode={"contain"}
        />

        <View style={styles.heading}>
          <View>
            <Text
              style={{ fontFamily: "serif", color: "#f44336", fontSize: 50 }}
            >
              Sign Up
            </Text>
          </View>
          <View
            style={{
              marginTop: "10%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 15 }}>Already a member ? </Text>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Text
                style={{
                  color: "#1565c0",
                  fontSize: 18,
                  fontStyle: "italic",
                  textDecorationLine: "underline",
                }}
              >
                Login here.
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            maxHeight: "40%",
            borderWidth: 5,
            borderRadius: 5,
            margin: 5,
            borderColor: "#c1d5e0",
          }}
        >
          <ScrollView
            contentContainerStyle={styles.container_1}
            persistentScrollbar
          >
            <Input
              containerStyle={{ width: "65%" }}
              inputStyle={{ color: "black" }}
              inputContainerStyle={{ opacity: 0.8 }}
              placeholder="Address"
              placeholderTextColor="black"
              underlineColorAndroid="transparent"
              keyboardType="default"
              rightIcon={<Icon name="address-card" size={15} color="black" />}
            />

            <Input
              containerStyle={{ width: "65%" }}
              inputStyle={{ color: "black" }}
              placeholder="Place"
              placeholderTextColor="black"
              underlineColorAndroid="transparent"
              keyboardType="default"
              rightIcon={<Icon name="globe-americas" size={15} color="black" />}
            />

            <Input
              containerStyle={{ width: "65%" }}
              inputStyle={{ color: "black" }}
              placeholder="City"
              placeholderTextColor="black"
              underlineColorAndroid="transparent"
              keyboardType="default"
              rightIcon={<Icon name="city" size={15} color="black" />}
            />

            <Input
              containerStyle={{ width: "65%" }}
              inputStyle={{ color: "black" }}
              placeholder="Pincode"
              placeholderTextColor="black"
              underlineColorAndroid="transparent"
              keyboardType="number-pad"
              rightIcon={<Icon name="envelope" solid size={15} color="black" />}
            />

            <Input
              containerStyle={{ width: "65%" }}
              inputStyle={{ color: "black" }}
              placeholder="State"
              placeholderTextColor="black"
              underlineColorAndroid="transparent"
              keyboardType="default"
              rightIcon={
                <Icon name="address-book" solid size={15} color="black" />
              }
            />

            <Input
              containerStyle={{ width: "65%" }}
              inputStyle={{ color: "black" }}
              placeholder="Email"
              placeholderTextColor="black"
              underlineColorAndroid="transparent"
              keyboardType="email-address"
              autoCapitalize="none"
              rightIcon={<Icon name="at" solid size={15} color="black" />}
            />

            <Input
              containerStyle={{ width: "65%" }}
              inputStyle={{ color: "black" }}
              placeholder="Password"
              placeholderTextColor="black"
              underlineColorAndroid="transparent"
              keyboardType="default"
              secureTextEntry
              rightIcon={
                <Icon
                  name="eye-slash"
                  // onPress={() => this.change()}
                  size={18}
                  color="black"
                />
              }
            />

            <Input
              containerStyle={{ width: "65%" }}
              inputStyle={{ color: "black" }}
              placeholder="Confirm Password"
              placeholderTextColor="black"
              underlineColorAndroid="transparent"
              keyboardType="default"
              secureTextEntry
              rightIcon={
                <Icon
                  name="eye-slash"
                  // onPress={() => this.change()}
                  size={18}
                  color="black"
                />
              }
            />
          </ScrollView>
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            height: "10%",
            marginTop: "10%",
          }}
        >
          <Button
            containerStyle={{
              borderRadius: 20,

              width: 250,
              height: 50,
              paddingHorizontal: 5,
              paddingVertical: "1%",
            }}
            buttonStyle={{ backgroundColor: "transparent" }}
            raised
            icon={{
              name: "user",
              color: "black",
              size: 18,
              type: "font-awesome",
            }}
            title="Sign Up"
            titleStyle={{ color: "black" }}
            onPress={AlertExample}
          />

          <CheckBox
            title="I agree to Privacy Policy."
            textStyle={{ color: "black", fontSize: 15 }}
            containerStyle={{
              backgroundColor: "transparent",
              borderColor: "transparent",
              opacity: 0.9,
            }}
            checkedIcon={<Icon name="check-square" size={25} />}
            uncheckedIcon={<Icon name="square" size={25} />}
            checked={this.state.checked}
            onPress={() => this.setState({ checked: !this.state.checked })}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eceff1",
    width: width,
    height: height,
  },
  container_1: {
    backgroundColor: "#babdbe",
    alignItems: "center",
    paddingVertical: "5%",
  },
  logo: {
    height: "10%",
    width: "100%",
    marginBottom: "0.5%",
  },
  heading: {
    flexDirection: "column",
    alignItems: "center",
    marginVertical: "8%",
  },
});
