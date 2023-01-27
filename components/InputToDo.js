import { useState, useRef } from "react";

import { TextInput, View, StyleSheet, Modal, Button } from "react-native";

function InputToDo(props) {
  const [todo, setTodo] = useState("");

  function addToDoList() {
    props.onAddToDo(todo);
    setTodo("");
  }

  const inputRef = useRef();

  return (
    <View>
      <Modal
        visible={props.visible}
        onShow={() => inputRef.current?.focus()}
        animationType="fade"
        transparent
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Add your todo list"
            onChangeText={setTodo}
            ref={inputRef}
          />
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={props.cancelModal} />
            <Button title="Add" onPress={addToDoList} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default InputToDo;

const styles = StyleSheet.create({
  inputContainer: {
    top: 300,
    margin: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#90E0EF",
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 1,
    color: "#120438",
    backgroundColor: "#CAF0F8",
    borderColor: "#CAF0F8",
    borderRadius: 6,
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
