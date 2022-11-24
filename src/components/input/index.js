import React, {useState} from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard  } from 'react-native';

import styles from './styles';

const getTextInput = (initValue, placeholder) => {
    const [value, setValue] = useState(initValue);
    const input = (
        <>
            <Text style={styles.placeholder}>{placeholder}</Text>
            <TextInput value={value} style={styles.input} onChangeText={(v) => setValue(v)} />
        </>
    );
    return [value, input];
}

export default getTextInput;