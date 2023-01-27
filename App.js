import { useState } from "react";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Platform,
  ToastAndroid,
} from "react-native";

import InputToDo from "./components/InputToDo";
import ToDoList from "./components/ToDoList";

export default function App() {
  const [modal, setModal] = useState(false);
  const [addToDo, setAddToDo] = useState([]);

  function modalOn() {
    setModal(true);
  }

  function modalOff() {
    setModal(false);
  }

  function addToDoList(enteredText) {
    if (enteredText.length < 1) {
      if (Platform.OS === "android") {
        ToastAndroid.show("Please enter a text", ToastAndroid.SHORT);
      } else {
        AlertIOS.alert("Please enter a text");
      }
    } else {
      setAddToDo((item) => [
        ...item,
        { text: enteredText, id: Math.random().toString() },
      ]);
    }
    modalOff();
  }

  function deleteToDo(id) {
    setAddToDo((item) => {
      return item.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.title}>TODO List</Text>
        <InputToDo
          visible={modal}
          cancelModal={modalOff}
          onAddToDo={addToDoList}
        />
        <View styles={styles.toDoListContainer}>
          <FlatList
            data={addToDo}
            renderItem={(data) => {
              return (
                <ToDoList
                  text={data.item.text}
                  id={data.item.id}
                  delete={deleteToDo}
                  index={data.index}
                />
              );
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={modalOn}>
            <Text style={{ color: "white", fontSize: 25 }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    color: "#0077B6",
    borderBottomWidth: 3,
    borderBottomColor: "#0077B6",
  },
  button: {
    width: 60,
    height: 60,
    padding: 10,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0077B6",
  },
  buttonContainer: {
    position: "absolute",
    right: 40,
    bottom: 40,
    alignItems: "flex-end",
  },
  toDoListContainer: { flexDirection: "row", backgroundColor: "black" },
});
