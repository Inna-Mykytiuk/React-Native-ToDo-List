import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Task from "./src/components/Task";

export default function App() {
  const { container, taskWrapper, sectionTitle, items } = styles;

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
});
