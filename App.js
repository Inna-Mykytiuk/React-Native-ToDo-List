import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import Task from "./src/components/Task";

export default function App() {
  const {
    container,
    taskWrapper,
    sectionTitle,
    items,
    writeTaskWrapper,
    input,
    addWrapper,
    addText,
  } = styles;

  return (
    <View style={container}>
      <StatusBar style='auto' />
      <View style={taskWrapper}>
        <Text style={sectionTitle}>Today's task</Text>
      </View>
      <View style={items}>
        <Task text={"Task 1"} />
        <Task text={"Task 2"} />
        <Task text={"Task 3"} />
        <Task text={"Task 4"} />
        <Task text={"Task 5"} />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={writeTaskWrapper}
      >
        <TextInput style={input} placeholder={"Write Task"} />
        <TouchableOpacity>
          <View style={addWrapper}>
            <Text style={addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    // textAlign: "center",
  },
  items: {
    marginTop: 40,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
});
