import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Streakbar from "./screens/Streakbar";

var currentDate = new Date(); //  User's SignIn day
var weekDays = [];
for (let i = 1; i <= 7; i++) {
  weekDays.push(
    currentDate.toLocaleDateString("default", { weekday: "short" })
  );
  currentDate.setDate(currentDate.getDate() + 1);
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Week 6 - Partnerships</Text>
      <Streakbar data={weekDays} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBECF0",
    alignItems: "center",
  },
  header: {
    textAlign: "center",
    padding: 20,
    fontSize: 20,
    marginTop: 20,
  },
});
