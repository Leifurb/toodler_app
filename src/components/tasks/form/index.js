import React from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, TouchableOpacity  } from 'react-native';
import getTextInput from '../../input';
import getCheckboxInput from '../../input/checkbox';
import getColorInput from '../../input/color';


import styles from './styles';

const create = (id, name, color, isFinished) => {

    var board = {
        'name': name,
        'description': color,
        'isFinished': isFinished
    }

    if(id != -1) {
        board['id'] = id;
    }

    return board;
}

const ListForm = ({data, save, del}) => {

    const id = data.id == null ? -1 : data.id;
    const [name, nameInput] = getTextInput(data.name == null ? '' : data.name, 'Name');
    const [des, desInput] = getTextInput(data.description == null ? '' : data.description, 'Description');
    const [isFinished, taskInput] = getCheckboxInput(data.isFinished == null ? false : data.isFinished, 'Is Finished?');

    

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                <Text style={styles.header}>{id == -1 ? 'Create new task' : 'Update task'}</Text>
                {nameInput}
                {desInput}
                {taskInput}
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={() => save()}>
                        <Text style={styles.button}>
                            Back
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => save(create(id, name, des, isFinished))}>
                        <Text style={styles.button}>
                            { id == -1 ? 'Create' : 'Save'} 
                        </Text>
                    </TouchableOpacity>
                    { id != -1 &&
                        <View style={styles.btnRight}>
                            <TouchableOpacity onPress={() => del(id)}>
                                <Text style={[styles.button, styles.delete]}>
                                    Delete
                                </Text>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default ListForm;