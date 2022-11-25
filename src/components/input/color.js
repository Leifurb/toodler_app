import React, {useState} from 'react';
import {Text} from 'react-native';
import { TriangleColorPicker, toHsv, fromHsv  } from 'react-native-color-picker'

import styles from './styles';

const getColorInput = (initValue, placeholder) => {
    const [value, setValue] = useState(initValue);
    const input = (
        <>
            <Text style={styles.placeholder}>{placeholder}</Text>
            <TriangleColorPicker onColorChange={color => setValue(fromHsv(color))} style={styles.colorPick}/>
        </>);
    return [value, input];
}
// <Text style={styles.placeholder}>{placeholder}</Text>
export default getColorInput;