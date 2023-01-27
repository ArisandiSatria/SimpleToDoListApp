import { Text, View, StyleSheet, Pressable } from "react-native";

function ToDoList(props) {
  return (
    <View style={styles.toDoItem}>
      <Pressable onPress={props.delete.bind(this, props.id)}>
        <Text style={styles.toDoText}>
          {props.index + 1}. {props.text}
        </Text>
      </Pressable>
    </View>
  );
}

export default ToDoList;

const styles = StyleSheet.create({
  toDoItem: {
    margin: 8,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#90E0EF",
  },
});
