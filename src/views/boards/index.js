import { FlatList, View, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, Button, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

import BoardItem from '../../components/boards/item';
import AddButton from '../../components/buttons/add'
import BoardForm from '../../components/boards/form';
import Header from '../../components/header';

var nextId = 4; 

const Boards = ({boards, setBoards, setBoardId}) => {

    const [board, setBoard] = useState({});
    const [modify, setModify] = useState(-1);

    const deleteBoard = (id) => {
        const filteredData = boards.filter(item => item.id !== id);
        setBoards(filteredData);
        setModify(-1);
    }
    
    const openModifyBoard = (id, item) => {
        setBoard(item);
        setModify(id);
    }

    const saveBoard = (item) => {
        if(item !== undefined) {
            if('id' in item) {
                const newBoards = boards.map(board => {
                    if(board['id'] == item['id']) {
                        return item;
                    }
                    return board;
                });
                setBoards(newBoards);
            } else {
                item.id = nextId;
                nextId++;
                setBoards([...boards, item])
            }
        }
        setModify(-1);
    }
    return (
        <View style={{height: '100%'}}>
            <Header/>
            {modify === -1 ?
                (<>
                    <FlatList
                        data={boards}
                        numColumns={1}
                        renderItem={({ item }) => {
                            return (
                                <BoardItem 
                                    item={item} 
                                    onModify={() => openModifyBoard(item.id, item)}
                                    onOpen={() => setBoardId(item.id)}
                                />
                            );
                        }}
                        keyExtractor={(board) => board.id}
                    />
                    <AddButton action={() => openModifyBoard(0, {})}/>
                </>
                )
            :
                (
                    <BoardForm data={board} save={saveBoard} del={deleteBoard}/>
                )
            }
        </View>
    );
};

export default Boards;