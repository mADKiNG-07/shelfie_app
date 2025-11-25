import { StyleSheet, Text, View, Image } from "react-native";
import Logo from "../assets/img/logo_dark.png";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View style={index_styles.container}>
      <Image source={Logo} style={index_styles.image} />
      <Text>The Number 1</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</Text>

      <View style={index_styles.card}>
        <Text style={index_styles.title}>Hello, this is a card</Text>
      </View>

      <Link href="/about" style={{ marginTop: 30 }}>
        Go to About Page
      </Link>
    </View>
  );
};

export default Home;

export const index_styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  image: {
    marginVertical: 20,
    width: 100,
    height: 100,
  },

  card: {
    backgroundColor: "#f8f8f8",
    padding: 20,
    borderRadius: 10,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
});
