import React, { useState } from 'react';

import { Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';

import styles from './styles';

const ListItem = ({item, onModify, onOpen}) => {    

    return (
        <TouchableOpacity style={styles.container} onPress={onOpen} onLongPress={onModify}>
            <Text style={styles.title} numberOfLines={1}>
                {item.name}
            </Text>
            <View style={[styles.color, {backgroundColor: item.color}]} />
        </TouchableOpacity>
    )
};

export default ListItem;