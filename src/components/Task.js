import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = (props) => {
  const { item, itemLeft, square, itemText, circular } = styles;
  return (
    <View style={item}>
      <View style={itemLeft}>
        <View style={square} />
        <Text style={itemText}>{props.text}</Text>
      </View>
      <View style={circular}></View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  item: {
    // marginHorizontal: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    borderRadius: 5,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
    // fontSize: 20,
    // fontWeight: "bold",
  },
  circular: {
    width: 12,
    height: 12,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#55BCF6",
    // backgroundColor: "#55BCF6",
  },
});
