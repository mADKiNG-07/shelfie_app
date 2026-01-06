import { useColorScheme, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { index_styles } from "./index";
import { Colors } from "../constants/colors";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";

const Contact = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme!] ?? Colors.light;

  return (
    <View
      style={[index_styles.container, { backgroundColor: theme.background }]}
    >
      <ThemedText style={[index_styles.boldTitle]}>Contact</ThemedText>
      <Spacer height={10} />
      <ThemedText>This is the contact page of the app.</ThemedText>

      <Spacer height={20} />

      <Link href="/" style={[index_styles.link]}>
        <ThemedText>Return</ThemedText>
      </Link>
    </View>
  );
};

export default Contact;
