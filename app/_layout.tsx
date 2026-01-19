import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Colors } from "../constants/colors";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme!] ?? Colors.light;

  return (
    <>
      <StatusBar style="auto" />
      <View style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.title,
          }}
        >
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ title: "Home" }} />
          <Stack.Screen name="about" options={{ title: "About" }} />
          <Stack.Screen name="contact" options={{ title: "Contact" }} />
        </Stack>
      </View>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  footer: {
    textAlign: "center",
    color: "gray",
    fontSize: 16,
  },
});
