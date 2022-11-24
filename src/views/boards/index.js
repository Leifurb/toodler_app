import { FlatList, View, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

import BoardItem from '../../components/boards/item';
import AddButton from '../../components/buttons/add'
import BoardForm from '../../components/boards/form';

const data = require('../../data/data.json');

var nextId = 4;

const Boards = ({navigation}) => {

    const [boards, setBoards] = useState(data.boards);
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
        <View style={{backgroundColor: 'white', height:'100%'}}>
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
                                    onOpen={() => navigation.push('Lists', {'boardId':item.id, 'title': item.name})}
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