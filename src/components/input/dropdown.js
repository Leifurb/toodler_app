import React, {useState} from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard  } from 'react-native';

import styles from './styles';

import DropDownPicker from 'react-native-dropdown-picker';


const getDropDownInput = (initValue, placeholder, labels) => {
    const [value, setValue] = useState(initValue);
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState(labels);

    const input = (
        <>
            <Text style={styles.placeholder}>{placeholder}</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                onChangeValue={(v) => {
                    setValue(v);
                }}
            />
        </>
    );
    return [value, input];
}

export default getDropDownInput;