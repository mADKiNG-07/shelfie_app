import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ThemedView from "../../components/ThemedView";
import { index_styles } from "../index";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { Link } from "expo-router";

const login = () => {
  const [count, setCount] = useState(0);
  return (
    <ThemedView style={index_styles.container}>
      <Spacer />

      <ThemedText title={true} style={index_styles.boldTitle}>
        Login to your account
      </ThemedText>

      <Spacer height={100} />

      <Link href="/register">
        <ThemedText style={{ textAlign: "center" }}>
          Don't have an account? Register
        </ThemedText>
      </Link>

      {/* counter example */}
      <Pressable onPress={() => setCount(count + 1)} style={{ margin: 20 }}>
        <ThemedText style={{ textAlign: "center" }}>Increment</ThemedText>
      </Pressable>

      <ThemedText style={{ textAlign: "center" }}>{count}</ThemedText>
    </ThemedView>
  );
};

export default login;

const styles = StyleSheet.create({});
