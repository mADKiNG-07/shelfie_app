import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import ThemedView from "../../components/ThemedView";
import { index_styles } from "../index";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { Link } from "expo-router";

const login = () => {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login");
    console.log(email, password);
  };

  return (
    <ThemedView style={[index_styles.container, { padding: 20 }]}>
      <Spacer />

      <ThemedText title={true} style={index_styles.boldTitle}>
        Login to your account
      </ThemedText>

      <Spacer height={100} />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <Pressable onPress={handleLogin} style={styles.button}>
        <ThemedText style={{ textAlign: "center" }}>Login</ThemedText>
      </Pressable>

      <Spacer height={20} />

      <Link href="/register">
        <ThemedText style={{ textAlign: "center" }}>
          Don't have an account? Register
        </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default login;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "blue",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
