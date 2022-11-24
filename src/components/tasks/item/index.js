import React, { useState } from 'react';

import { Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';

import styles from './styles';

const TaskItem = ({item, onModify, onOpen}) => {    

    return (
        <TouchableOpacity style={[styles.container, item.isFinished && {opacity: 0.4}]} onPress={onOpen} onLongPress={onModify}>
            <Text style={[styles.title, item.isFinished && {textDecorationLine: 'line-through'}]} numberOfLines={1}>
                {item.name}
            </Text>
            <Text style={[styles.description, item.isFinished && {textDecorationLine: 'line-through'}]}>
                {item.description}
            </Text>
        </TouchableOpacity>
    )
};

export default TaskItem;