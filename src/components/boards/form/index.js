import React from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, TouchableOpacity  } from 'react-native';
import getTextInput from '../../input';

import styles from './styles';

const create = (id, name, img, des) => {

    var board = {
        'name': name,
        'thumbnailPhoto': img,
        'description': des
    }

    if(id != -1) {
        board['id'] = id;
    }

    return board;
}



const BoardForm = ({data, save}) => {

    const id = data.id == null ? -1 : data.id;
    const [name, nameInput] = getTextInput(data.name == null ? '' : data.name, 'Name');
    const [img, imgInput] = getTextInput(data.thumbnailPhoto == null ? '' : data.thumbnailPhoto, 'Image URL');
    const [des, desInput] = getTextInput(data.description == null ? '' : data.description, 'Description');



    return (
        <KeyboardAvoidingView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                <Text style={styles.header}>{id == -1 ? 'Create new board' : 'Update board'}</Text>
                {nameInput}
                {imgInput}
                {desInput}
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={() => save()}>
                        <Text style={styles.button}>
                            Back
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => save(create(id, name, img, des))}>
                        <Text style={styles.button}>
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default BoardForm;