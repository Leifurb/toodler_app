import { FlatList, SafeAreaView, View, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

import ListItem from '../../components/lists/item';
import AddButton from '../../components/buttons/add'
import ListForm from '../../components/lists/form';
import Header from '../../components/header';
import BackButton from '../../components/buttons/back';

var nextId = 9;

const Lists = ({lists, boardId, setLists, setListId, back, title}) => {

    const listsInBoard = lists.filter(l => l.boardId == boardId);

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
    return (
        <View style={{height: '100%'}}>
            <Header title={title}/>
            {modify === -1 ?
                (<>
                    <FlatList
                        data={listsInBoard}
                        numColumns={1}
                        renderItem={({ item }) => {
                            return (
                                <ListItem 
                                    item={item} 
                                    onModify={() => openModifyList(item.id, item)}
                                    onOpen={() => setListId(item.id)}
                                />
                            );
                        }}
                        keyExtractor={(list) => list.id}
                    />
                    <BackButton action={back}/>
                    <AddButton action={() => openModifyList(0, {})}/>
                </>
                )
            :
                (
                    <ListForm data={list} save={saveList} del={deleteList} boardId={boardId}/>
                )
            }
        </View>
    );
};

export default Lists;