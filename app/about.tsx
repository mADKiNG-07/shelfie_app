import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { index_styles } from "./index";
import { Link } from "expo-router";

const About = () => {
  return (
    <View style={index_styles.container}>
      <Text style={index_styles.title}>About</Text>
      <Text>This is the about page of the app.</Text>

      <Link href="/" style={{ marginTop: 30 }}>
        {`<-`} Return
      </Link>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
