import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { index_styles } from "./index";
import { Link } from "expo-router";
import { Colors } from "../constants/colors";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";

const About = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme!] ?? Colors.light;

  return (
    <View
      style={[index_styles.container, { backgroundColor: theme.background }]}
    >
      <ThemedText style={[index_styles.boldTitle]}>About Page</ThemedText>
      <Spacer height={10} />
      <ThemedText>This is the about page of the app.</ThemedText>

      <Spacer height={20} />

      <Link href="/" style={[index_styles.link]}>
        <ThemedText>Return</ThemedText>
      </Link>
    </View>
  );
};

export default About;
