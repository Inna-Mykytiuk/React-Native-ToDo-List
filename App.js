import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  // Keyboard,
} from "react-native";
import Task from "./src/components/Task";

export default function App() {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);

  const addTask = () => {
    // Keyboard.dismiss();
    // if (!task) return;

    setTaskItems([...taskItems, task]);
    setTask("");
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  const {
    container,
    taskWrapper,
    sectionTitle,
    items,
    writeTaskWrapper,
    input,
    addWrapper,
    addText,
    wrapper,
    image,
  } = styles;

  return (
    <View style={container}>
      <ImageBackground
        style={image}
        source={require("./assets/notebook-bg.jpg")}
      >
        <StatusBar style='auto' />
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
          keyboardShouldPersistTaps='handled'
        >
          <View style={wrapper}>
            <View style={taskWrapper}>
              <Text style={sectionTitle}>Today's task</Text>
            </View>
            <View style={items}>
              {taskItems.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => completeTask(index)}
                  >
                    <Task text={item} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>
        <View style={wrapper}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={writeTaskWrapper}
          >
            <TextInput
              style={input}
              placeholder={"Write Task"}
              onChangeText={(text) => setTask(text)}
              value={task}
            />
            <TouchableOpacity onPress={() => addTask()}>
              <View style={addWrapper}>
                <Text style={addText}>+</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    justifyContent: "space-between",
  },
  wrapper: {
    marginHorizontal: 20,
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    backgroundColor: "#fff",
    opacity: 0.6,
    borderRadius: 60,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  items: {
    marginTop: 40,
  },
  writeTaskWrapper: {
    // position: "absolute",
    // bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 40,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "gray",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
});
