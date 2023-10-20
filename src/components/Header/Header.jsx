import React from "react";

import { View, Text, StyleSheet, } from "react-native";

import { Image } from "react-native";

const img = require("../../../assets/Nasa-logo.png")
console.log(img)
export default function Header() {
  return (
    <View>
      <View>
        <Text>Explore</Text>
      </View>

      <View>
       <Image  source={require('../../../assets/Nasa-logo.png')}/>

      </View>
    </View>
  );
}
