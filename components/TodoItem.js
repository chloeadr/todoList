import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TodoItem = (todo) => (
    <View style={[(todo.state == 1) ? styles.containerFinished : styles.containerUnfinished]}>
        <Text style={[(todo.state == 1) ? styles.titleFinished : styles.titleUnfinished]}>{todo.title}</Text>
        <Text style={[(todo.state == 1) ? styles.descriptionFinished : styles.descriptionUnfinished]}>{todo.description}</Text>
    </View>
);

export default TodoItem;

const styles = StyleSheet.create({
    containerFinished: {
      flex: 1,
      backgroundColor: '#4B3488',
      alignItems: 'start',
      justifyContent: 'center',
      borderRadius: 20,
      padding: 30,
      margin: 15,
    },

    containerUnfinished: {
        flex: 1,
        backgroundColor: '#D2B7E5',
        alignItems: 'start',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 30,
        margin: 15,
      },
  
    titleFinished: {
        fontFamily: 'RalewayRoman-Regular',
        fontWeight: '700',
        fontSize: 25,
        color: 'white',
        marginBottom: 5,
    },

    titleUnfinished: {
        fontFamily: 'RalewayRoman-Regular',
        fontWeight: '700',
        fontSize: 25,
        color: '#4B3488',
        marginBottom: 5,
    },

    descriptionFinished: {
        fontFamily: 'RalewayRoman-Regular',
        fontWeight: '400',
        fontSize: 16,
        color: 'white',
    },

    descriptionUnfinished: {
        fontFamily: 'RalewayRoman-Regular',
        fontWeight: '400',
        fontSize: 16,
        color: '#4B3488',
    }
  });