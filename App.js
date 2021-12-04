import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handelChange = (value) => {
    setValue(value);
  };
  const onAddTodo = () => {
    setTodos([...todos, value]);
    setValue("");
  };
  const onDellTodo = (i) => {
    const Todos = [...todos];
    Todos.splice(i, 1);
    setTodos(Todos);
  };
  const onDellAll=()=>{
    setTodos([])
  }
  return (
    <View style={styles.container}>
      <Text>Todo App</Text>
      <TextInput
        value={value}
        onChangeText={handelChange}
        placeholder="Enter  Todo Item"
      />
      <Button onPress={onAddTodo} title="Add Todo"></Button>
      {todos.map((todo, i) => (
        <Text>
          {todo}
          <Button
            onPress={() => onDellTodo(i)}
            title="Delete"
            color="#ff0000"
          />
        </Text>
      ))}
      <Button onPress={onDellAll} title="Delete All"></Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
