import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, Text, View, TouchableOpacity } from 'react-native';

const EditScreen = ({ navigation, route }) => {

    var { todo } = route.params;
    var { todoList } = route.params;
    console.log(todoList);

    var initTitle = todo.title;
    var initDescription = todo.description;

    const [title, setTitle] = useState(initTitle);
    const [description, setDescription] = useState(initDescription);

    function saveTodo() {
        todo.title = title;
        todo.description = description;
    }

    function unfinishedTodo() {
        todo.state = 0;
        console.log(todo);
    }

    function finishedTodo() {
        todo.state = 1;
        console.log(todo);
    }

    function deleteTodo() {
        todoList.splice(todo.id, 1);
        console.log(todoList);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edit task</Text>
            <TextInput
            style={styles.input}
            onChangeText={setTitle}
            value={title}
            />
            <TextInput
            style={styles.input}
            onChangeText={setDescription}
            value={description}
            />
            <View style={styles.buttonLine}>
                <TouchableOpacity style={styles.buttonUnfinished} onPress={() => { unfinishedTodo() }}>
                    <Text style={styles.buttonTextUnfinished}>Unfinished</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonFinished} onPress={() => { finishedTodo() }}>
                    <Text style={styles.buttonText}>Finished</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => {
                saveTodo()
                navigation.navigate('Home', { newTodo: todo })
            }}>
                <Text style={styles.buttonText}>Save changes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
                deleteTodo()
                navigation.navigate('Home', { newTodoList: todoList })
            }}>
                <Text style={styles.buttonText}>Delete task</Text>
            </TouchableOpacity>
        </View>
    )
};

    
export default EditScreen;

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

    buttonLine: {
        flexDirection: 'row',
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
    },

    buttonFinished: {
        width: 160,
        backgroundColor: '#4B3488',
        borderRadius: 15,
        padding: 15,
        margin: 15,
        alignItems: 'center',
    },

    buttonUnfinished: {
        width: 160,
        backgroundColor: '#D2B7E5',
        borderRadius: 15,
        padding: 15,
        margin: 15,
        alignItems: 'center',
    },
    
    buttonTextUnfinished: {
        fontFamily: 'RalewayRoman-Regular',
        fontWeight: '400',
        color: '#4B3488',
        fontSize: 16,
    }
  });