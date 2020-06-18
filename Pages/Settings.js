import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Card } from "react-native-paper";

//Third Party IMPORT

export default class Settings extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <FontAwesome5 name="microphone" size={24} color="black" />
        </View>
        <View style={styles.container}>
          <Card></Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "25%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "steelblue",
    paddingHorizontal: 18,
    paddingTop: 5,
  },
});
