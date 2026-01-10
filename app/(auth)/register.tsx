import { StyleSheet } from "react-native";
import React from "react";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { index_styles } from "..";
import { Link } from "expo-router";

const register = () => {
  return (
    <ThemedView style={index_styles.container}>
      <Spacer />

      <ThemedText title={true} style={index_styles.boldTitle}>
        Register to your account
      </ThemedText>

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

const styles = StyleSheet.create({});
