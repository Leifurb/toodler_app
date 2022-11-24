import React from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, TouchableOpacity  } from 'react-native';
import getTextInput from '../../input';



import styles from './styles';


const create = (name, img, des) => {
    return {
        'name': name,
        'thumbnailPhoto': img,
        'description': des
    }
}



const BoardForm = ({data, save}) => {

    return (
        <View>empty</View>
    );
};

export default BoardForm;