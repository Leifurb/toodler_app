import React from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, TouchableOpacity  } from 'react-native';
import getTextInput from '../../input';
import getColorInput from '../../input/color';


import styles from './styles';

const create = (id, name, color, boardId) => {
    var board = {
        'name': name,
        'color': color
    }
    if(id != -1) {
        board['id'] = id;
    }
    board['boardId'] = boardId;
    return board;
}



const ListForm = ({data, save, del, boardId}) => {

    const id = data.id == null ? -1 : data.id;
    const [name, nameInput] = getTextInput(data.name == null ? '' : data.name, 'Name');
    const [color, colorInput] = getColorInput(data.color == null ? '' : data.color, 'Color');

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                <Text style={styles.header}>{id == -1 ? 'Create new list' : 'Update list'}</Text>
                {nameInput}
                {colorInput}
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={() => save()}>
                        <Text style={styles.button}>
                            Back
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => save(create(id, name, color, boardId))}>
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