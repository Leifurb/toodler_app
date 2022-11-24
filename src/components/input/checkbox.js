import React, {useState} from 'react';
import CheckBox from "expo-checkbox";
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard  } from 'react-native';

import styles from './styles';

const getCheckboxInput = (initValue, placeholder) => {
    const [value, setValue] = useState(initValue);
    const input = (
        <>
            <Text style={styles.placeholder}>{placeholder}</Text>
            <View style={styles.checkBox}>
                <CheckBox value={value} onValueChange={() => {setValue(!value)}} />
            </View>
        </>
    );
    return [value, input];
}

export default getCheckboxInput;