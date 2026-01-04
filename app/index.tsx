import { StyleSheet, Text, View, Image, useColorScheme } from "react-native";
import Logo from "../assets/img/logo_dark.png";
import React from "react";
import { Link } from "expo-router";
import { Colors } from "../constants/colors";

const Home = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme!] ?? Colors.light;

  return (
    <View
      style={[index_styles.container, { backgroundColor: theme.background }]}
    >
      <Image source={Logo} style={index_styles.image} />
      <Text style={{ color: theme.title }}>The Number 1</Text>
      <Text style={{ marginTop: 10, marginBottom: 30, color: theme.title }}>
        Reading List App
      </Text>

      <View style={index_styles.card}>
        <Text style={[index_styles.title]}>Hello, this is not a card</Text>
      </View>

      <Link href="/about" style={[index_styles.link, { color: theme.text }]}>
        About Page
      </Link>
      <Link href="/contact" style={[index_styles.link, { color: theme.text }]}>
        Contact Page
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

  link: {
    marginTop: 30,
    padding: 3,
    borderBottomWidth: 1,
  },
});
