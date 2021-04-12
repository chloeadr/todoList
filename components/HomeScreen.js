import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, TextInput, Text, Button } from 'react-native';
import TodoItem from './TodoItem';

const HomeScreen = ({ navigation, route }) => {

  const [addTodo, setAddTodo] = useState("");
  let [todoList, setTodoList] = useState([
    {
        id : 0,
        title : "Sing a happy song",
        description : "I recommend In the Heights",
        state : 0,
    },
    {
        id : 1,
        title : "Dance around your room",
        description : "Yes, like nobody's watching",
        state : 0,
    },
  ]);

  function addToList(todo) {
      const todoLast = todoList.length - 1;
      let currentId = todoList[todoLast].id + 1;
      let currentTodo = todoList.concat({
          id : currentId,
          title : todo,
          description : "Tap to add more details",
          state : 0,
      })
      setTodoList(currentTodo);
    }
  
  const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { todo: item, todoList: todoList })}>
          <TodoItem title={item.title} description={item.description} />
      </TouchableOpacity>
  ); 

  console.log(todoList);

  return (
    <View style={styles.container}>  
        <Text style={styles.title}>Your to-do list</Text>
        <TextInput
        style={styles.input}
        onChangeText={setAddTodo}
        value={addTodo}
        placeholder="What do you need to do?"
        />
        <TouchableOpacity style={styles.button} onPress={() => addToList(addTodo)}>
          <Text style={styles.buttonText}>Save new to-do</Text>
        </TouchableOpacity>
        <FlatList
          data={todoList}
          renderItem={renderItem}
          keyExtractor={todo => todo.id}
        />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E4FB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: 350,
    fontFamily: 'RalewayRoman-Regular',
    fontWeight: '400',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    color: '#4B3488',
    fontSize: 16,
    margin: 15,
    borderStyle: 'solid',
    borderColor: '#D2B7E5',
    borderWidth: 1,
  },

  title: {
    color: '#4B3488',
    fontFamily: 'RalewayRoman-Regular',
    fontWeight: '700',
    fontSize: 40,
    margin: 30,
  },

  button: {
    width: 350,
    backgroundColor: '#4B3488',
    borderRadius: 15,
    padding: 15,
    margin: 15,
    alignItems: 'center',
  },

  buttonText: {
    fontFamily: 'RalewayRoman-Regular',
    fontWeight: '400',
    color: 'white',
    fontSize: 16,
  }
});
