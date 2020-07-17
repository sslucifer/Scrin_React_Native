import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

//Third party import.
import Carousel from "../Carousel/Carousel";
import { dummyData } from "../Data/Home_Carousel_Data";
import Card from "../CardView/Card";

export default class Home extends React.Component {
  // state = {
  //   //Assing a array to your pokeList state
  //   carodata: [],
  // };
  // async componentDidMount() {
  //   try {
  //     const ApiCall = await fetch("https://reactnative.dev/movies.json");
  //     const response = await ApiCall.json();
  //     this.setState({ carodata: response.movies });
  //   } catch (err) {
  //     console.log("Error fetching data-----------", err);
  //   }
  // }
  render() {
    // async function getBannersFromApi() {
    //   try {
    //     const response = await fetch("https://reactnative.dev/movies.json");
    //     json = await response.json();
    //     console.log(json.results);
    //     return json.results;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    // const { carodata } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        {/* For microphone icon on the top of the page. */}
        <View style={styles.header}>
          <FontAwesome5 name="microphone" size={24} color="black" />
        </View>

        <ScrollView
          style={styles.scrollview}
          showsVerticalScrollIndicator={true}
          scrollIndicatorInsets={(50, 50, 50, 50)}
        >
          {/* For infinte Carousel. */}
          <View style={styles.caro}>
            <Carousel data={dummyData} />
          </View>

          <View style={styles.section_1}>
            <View style={styles.textFormat}>
              <Text style={{ fontWeight: "bold" }}>Section 1</Text>
            </View>
            <Card data={dummyData} />
          </View>

          <View style={styles.section_2}>
            <View style={styles.textFormat}>
              <Text style={{ fontWeight: "bold" }}>Section 2</Text>
            </View>
            <Card data={dummyData} />
          </View>

          <View style={styles.section_3}>
            <View style={styles.textFormat}>
              <Text style={{ fontWeight: "bold" }}>Section 3</Text>
            </View>
            <Card data={dummyData} />
          </View>

          <View style={styles.section_4}>
            <View style={styles.textFormat}>
              <Text style={{ fontWeight: "bold" }}>Section 4</Text>
            </View>
            <Card data={dummyData} />
          </View>

          {/* <View style={styles.section_5}>
            <Text>Section 5</Text>
          </View>

          <View style={styles.section_6}>
            <Text>Section 6</Text>
          </View>

          <View style={styles.section_7}>
            <Text>Section 7</Text>
          </View> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  caro: {
    backgroundColor: "steelblue",
    flex: 1,
    height: "20%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#3BAD87",
    paddingHorizontal: 18,
    paddingTop: 5,
  },
  scrollview: {
    flex: 1,
    backgroundColor: "steelblue",
  },
  textFormat: {
    marginLeft: "10%",
  },
  section_1: {
    flex: 1,
    height: "20%",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "steelblue",
  },
  section_2: {
    flex: 1,
    height: "20%",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "steelblue",
  },
  section_3: {
    flex: 1,
    height: "20%",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "steelblue",
  },
  section_4: {
    flex: 1,
    height: "20%",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "steelblue",
  },
  section_5: {
    flex: 1,
    height: "20%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
  },
  section_6: {
    flex: 1,
    height: "20%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
  section_7: {
    flex: 1,
    height: "20%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
});
