import { FlatList, View, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, Button } from 'react-native';
import BoardItem from '../boarditem';
import React, { useState } from 'react';
import AddButton from '../buttons/add';

import BoardForm from '../forms/board';
import ListItem from '../ListItem';

var nextId = 100;

const List = ({data, navigation}) => {

    const [boards, setBoards] = useState(data.boards);
    const [board, setBoard] = useState({});
    const [modify, setModify] = useState(-1);

    const deleteBoard = (id) => {
        const filteredData = boards.filter(item => item.id !== id);
        setBoards(filteredData);
    }
    
    const openModifyBoard = (id, item) => {
        setBoard(item);
        setModify(id);
    }

    const saveBoard = (item) => {
        if(obj['id'] === undefined) {
            item.item = nextId;
            nextId++;
            setBoards([...boards, item])
        } else {
            const newBoards = boards.map(board => {
                if(board['id'] == item['id']) {
                    return item;
                }
                return board;
            });
            setBoards(newBoards);
        }
        setModify(-1);
    }

    return (
        <>
            {modify === -1 ?
                (<>
                    <FlatList
                        data={boards}
                        numColumns={2}
                        renderItem={({ item }) => {
                            return (
                                <ListItem 
                                    item={item} 
                                    onDelete={() => deleteBoard(item.id)}
                                    onEdit={() => openModifyBoard(item.id, item)}
                                    navigation={navigation}
                                />
                            );
                        }}
                        keyExtractor={(board) => board.id}
                    />
                    <AddButton action={() => openModifyBoard({})}/>
                </>
                )
            :
                (
                    <BoardForm data={board} save={saveBoard}/>
                )
            }
        </>
    );
};

export default List;