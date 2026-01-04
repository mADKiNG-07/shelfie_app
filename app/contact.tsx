import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { index_styles } from "./index";
import { Colors } from "../constants/colors";

const Contact = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme!] ?? Colors.light;

  return (
    <View
      style={[index_styles.container, { backgroundColor: theme.background }]}
    >
      <Text style={[index_styles.title, { color: theme.title }]}>Contact</Text>
      <Text style={[index_styles.title, { color: theme.title }]}>
        This is the contact page of the app.
      </Text>

      <Link href="/" style={[index_styles.link, { color: theme.text }]}>
        {`<-`} Return
      </Link>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({});
