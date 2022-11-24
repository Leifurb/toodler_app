import { FlatList, View, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, Button } from 'react-native';
import React, { useState, useEffect } from 'react';

import ListItem from '../../components/lists/item';
import AddButton from '../../components/buttons/add'
import ListForm from '../../components/lists/form';

const data = require('../../data/data.json');

var nextId = 9;

const Lists = ({route, navigation}) => {

    const {boardId, title} = route.params;
    const listsInBoard = data.lists.filter(l => l.boardId == boardId);
    
    const [lists, setLists] = useState(listsInBoard);
    const [list, setList] = useState({});
    const [modify, setModify] = useState(-1);

    const deleteList = (id) => {
        const filteredData = lists.filter(item => item.id !== id);
        setLists(filteredData);
        setModify(-1);
    }
    
    const openModifyList = (id, item) => {
        setList(item);
        setModify(id);
    }

    const saveList = (item) => {
        if(item !== undefined) {
            if('id' in item) {
                const newLists = lists.map(list => {
                    if(list['id'] == item['id']) {
                        return item;
                    }
                    return list;
                });
                setLists(newLists);
            } else {
                item.id = nextId;
                item.boardId = boardId;
                nextId++;
                setLists([...lists, item])
            }
        }
        setModify(-1);
    }
    useEffect(() => {
        navigation.setOptions({title: title})
      });

    return (
        <View style={{backgroundColor: 'white', height:'100%'}}>
            {modify === -1 ?
                (<>
                    <FlatList
                        data={lists}
                        numColumns={1}
                        renderItem={({ item }) => {
                            return (
                                <ListItem 
                                    item={item} 
                                    onModify={() => openModifyList(item.id, item)}
                                    onOpen={() => navigation.push('Tasks', {'listId':item.id})}
                                />
                            );
                        }}
                        keyExtractor={(list) => list.id}
                    />
                    <AddButton action={() => openModifyList(0, {})}/>
                </>
                )
            :
                (
                    <ListForm data={list} save={saveList} del={deleteList}/>
                )
            }
        </View>
    );
};

export default Lists;