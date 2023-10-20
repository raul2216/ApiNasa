import React from "react";

import { View, Text, StyleSheet } from "react-native";

import { Image } from "react-native";

const img = require("../../../assets/Nasa-logo.png");
export default function Header() {
  return (
    <View style={styles.container}>
      <View styles={styles.leftContainer}>
        <Text style={styles.title}>Explore</Text>
      </View>

      <View style={styles.rightContainer}>
        <Image
          source={require("../../../assets/Nasa-logo.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  rightContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  title: {
    fontSize: 29,
    color: "#ffffff",
  },
  image: {
    width: 60,
    height: 60,
  },
});
