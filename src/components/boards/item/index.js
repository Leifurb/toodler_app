import React, { useState } from 'react';

import { Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';

import styles from './styles';

const BoardItem = ({item, onModify, onOpen}) => {    

    return (
        <TouchableOpacity style={styles.container} onPress={onOpen} onLongPress={onModify}>
            <Image
                style={styles.image}
                source={{
                    uri:item.thumbnailPhoto
                }}
            />
            <View style={styles.info}>
                <Text style={styles.title} numberOfLines={1}>
                    {item.name}
                </Text>
                <Text style={styles.description}>
                    {item.description}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

export default BoardItem;