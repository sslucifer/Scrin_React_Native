import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default class Download extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <FontAwesome5 name="microphone" size={24} color="black" />
        </View>
        <ScrollView style={styles.scrollview}>
          <View style={styles.caro}>
            <Text>Carousel_4</Text>
          </View>

          <View style={styles.section_1}>
            <Text>Section 1</Text>
          </View>
          <View style={styles.section_2}>
            <Text>Section 2</Text>
          </View>
          <View style={styles.section_3}>
            <Text>Section 3</Text>
          </View>
          <View style={styles.section_4}>
            <Text>Section 4</Text>
          </View>
          <View style={styles.section_5}>
            <Text>Section 5</Text>
          </View>
          <View style={styles.section_6}>
            <Text>Section 6</Text>
          </View>
          <View style={styles.section_7}>
            <Text>Section 7</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  caro: {
    backgroundColor: "#fff",
    flex: 1,
    height: 150,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#17baf6",
    paddingHorizontal: 18,
    paddingTop: 5,
  },
  scrollview: {
    flex: 1,
    backgroundColor: "steelblue",
  },
  section_1: {
    flex: 1,
    height: 150,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
  },
  section_2: {
    flex: 1,
    height: 150,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },
  section_3: {
    flex: 1,
    height: 150,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "teal",
  },
  section_4: {
    flex: 1,
    height: 150,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "brown",
  },
  section_5: {
    flex: 1,
    height: 150,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
  },
  section_6: {
    flex: 1,
    height: 150,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
  section_7: {
    flex: 1,
    height: 150,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
});
