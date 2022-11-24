import React from 'react';

import { Text, View, Image } from 'react-native';

import styles from './styles';

const ListItem = ({
    item
}) => (
    <View style={styles.container}>
        <Text style={[styles.listTitle, {backgroundColor: item.color}]} numberOfLines={1}>
            {item.name}
        </Text>
    </View>
);

export default ListItem;