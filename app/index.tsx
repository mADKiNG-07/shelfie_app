import { StyleSheet, View, useColorScheme } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Colors } from "../constants/colors";
import ThemedLogo from "../components/ThemedLogo";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";
import ThemedCard from "../components/ThemedCard";

const Home = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme!] ?? Colors.light;

  return (
    <View
      style={[index_styles.container, { backgroundColor: theme.background }]}
    >
      <ThemedLogo />
      <Spacer height={20} />

      <ThemedText style={index_styles.boldTitle} title={true}>
        The Number 1
      </ThemedText>

      <Spacer height={10} />
      <ThemedText>Reading List App</ThemedText>
      <Spacer height={20} />

      <ThemedCard>
        <ThemedText title={true} style={index_styles.boldTitle}>
          Hello, this is not a card
        </ThemedText>
      </ThemedCard>

      <Spacer height={20} />

      <Link href="/about" style={[index_styles.link]}>
        <ThemedText>About Page</ThemedText>
      </Link>
      <Spacer height={10} />
      <Link href="/contact" style={[index_styles.link]}>
        <ThemedText>Contact Page</ThemedText>
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

  boldTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  link: {
    padding: 3,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
});
