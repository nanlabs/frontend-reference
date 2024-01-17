import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Login Page</Text>
        <Text style={styles.subtitle}>In this view you can sign in</Text>
      </View>
      <Link href="/home">Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
