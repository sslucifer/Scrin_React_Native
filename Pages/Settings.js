import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Third Party IMPORT
export default class Settings extends React.Component {
  static navigationOptions = {
    title: "More",
    headerStyle: {
      backgroundColor: "#03A9F4",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={styles.container}>
            <Card style={styles.card}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Login")}
                style={styles.Section}
              >
                <AntDesign name="login" size={24} color="black" />
                <Text style={styles.text}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Section}>
                <MaterialIcons name="subscriptions" size={24} color="black" />
                <Text style={styles.text}>Subscribe</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Section}>
                <FontAwesome name="share-alt" size={24} color="black" />
                <Text style={styles.text}>Share</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.Section}
                onPress={() => this.props.navigation.navigate("Policy")}
              >
                <MaterialCommunityIcons
                  name="alert-decagram"
                  size={24}
                  color="black"
                />
                <Text style={styles.text}>Policy</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Section}>
                <MaterialCommunityIcons
                  name="settings"
                  size={24}
                  color="black"
                />
                <Text style={styles.text}>Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Section}>
                <MaterialIcons name="rate-review" size={24} color="black" />
                <Text style={styles.text}>Rate Us</Text>
              </TouchableOpacity>
            </Card>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    height: "100%",
    width: "100%",
  },
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
  Section: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "5%",
    paddingTop: "10%",
  },
  text: {
    fontSize: 18,
    padding: "5%",
    fontWeight: "bold",
  },
});
