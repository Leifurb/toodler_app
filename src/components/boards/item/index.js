import React, { useState } from 'react';

import { Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import DeleteButton from '../../buttons/delete';
import EditButton from '../../buttons/edit';

import styles from './styles';

function openBoard(boardId) {
    console.log('Open board with id: ' + boardId.toString());
}

function editBoard(event, boardId) {
    console.log('Edit borad with id: ' + boardId.toString());
}

function deleteBoard(event, boardId) {
    console.log(this.state.data)
    console.log('Delete borad with id: ' + boardId.toString());
}



const BoardItem = ({item, onDelete, onEdit, onOpen}) => {    

    const [select, setSelected] = useState(false);

    return (
        <TouchableOpacity style={styles.container} onPress={onOpen} onLongPress={() => {setSelected(!select)}}>
            <Image
                style={[styles.image, select && {opacity: 0.2}]}
                source={{
                    uri:item.thumbnailPhoto
                }}
            />
            <Text style={styles.title} numberOfLines={1}>
                {item.name}
            </Text>
            
            {select && 
                <View style={styles.buttonContainer}>
                    <SafeAreaView>
                        <EditButton id={item.id} action={onEdit}/>
                        
                    </SafeAreaView>
                    <SafeAreaView>
                        <DeleteButton id={item.id} action={onDelete}/>
                    </SafeAreaView>
                </View>
            }

        </TouchableOpacity>
    )
};

export default BoardItem;