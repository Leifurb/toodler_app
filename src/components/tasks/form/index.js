import React from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, TouchableOpacity  } from 'react-native';
import getTextInput from '../../input';
import getCheckboxInput from '../../input/checkbox';
import getColorInput from '../../input/color';
import getDropDownInput from '../../input/dropdown';

import styles from './styles';

const getLabels = (allLists, boardId) => {
    return allLists.filter(l => l.boardId == boardId).map((l) => {
        return {
            'label': l.name,
            'value': l.id
        };
    });
}

const create = (id, name, des, isFinished, list) => {

    var board = {
        'name': name,
        'description': des,
        'isFinished': isFinished,
        'listId': list
    }

    if(id != -1) {
        board['id'] = id;
    }

    return board;
}

const ListForm = ({data, save, del, boardId, allLists}) => {

    const id = data.id == null ? -1 : data.id;
    const [name, nameInput] = getTextInput(data.name == null ? '' : data.name, 'Name');
    const [des, desInput] = getTextInput(data.description == null ? '' : data.description, 'Description');
    const [isFinished, taskInput] = getCheckboxInput(data.isFinished == null ? false : data.isFinished, 'Is Finished?');

    const [list, listInput] = getDropDownInput(data.listId == null ? 0 : data.listId, 'List', getLabels(allLists, boardId));

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                <Text style={styles.header}>{id == -1 ? 'Create new task' : 'Update task'}</Text>
                {nameInput}
                {desInput}
                {taskInput}
                {listInput}
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={() => save()}>
                        <Text style={styles.button}>
                            Back
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => save(create(id, name, des, isFinished, list))}>
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