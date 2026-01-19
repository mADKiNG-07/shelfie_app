import { Pressable, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { index_styles } from "../";
import { Link } from "expo-router";

const register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("Register");
    console.log(email, password);
  };

  return (
    <ThemedView style={[index_styles.container, { padding: 20 }]}>
      <Spacer />

      <ThemedText title={true} style={index_styles.boldTitle}>
        Register to your account
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

      <Pressable onPress={handleRegister} style={styles.button}>
        <ThemedText style={{ textAlign: "center" }}>Register</ThemedText>
      </Pressable>

      <Spacer height={100} />

      <Link href="/login">
        <ThemedText style={{ textAlign: "center" }}>
          Already have an account? Login
        </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default register;

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
