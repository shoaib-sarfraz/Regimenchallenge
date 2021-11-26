import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

const Streakbar = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={props.data}
        renderItem={({ item }) => (
          <Text style={styles.item_style}>
            {item} {"\n"}
            <View style={styles.CircleShape} />
          </Text>
        )}
        keyExtractor={(index) => index.toString()}
      />
    </View>
  );
};

//Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
  },
  CircleShape: {
    textAlign: "center",
    width: 15,
    height: 15,
    borderRadius: 50 / 2,
    backgroundColor: "#FF9800",
  },
  item_style: {
    marginVertical: 18,
    marginHorizontal: 10,
  },
});

export default Streakbar;
