import React from 'react';

import { Text, View, Image, TouchableOpacity, SafeAreaView, Button } from 'react-native';

import styles from './styles';

const Modal = ({ children, title, add }) => (
    <View style={styles.modal}>
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {children}

            <Button title='add' />
            {add && <Button title='delete' />}
            <Button title='save' />
        </SafeAreaView>
    </View>
);

export default Modal;
