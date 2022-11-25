import { FlatList, View, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, Button } from 'react-native';
import BoardItem from '../boarditem';
import React, { useState } from 'react';
import AddButton from '../buttons/add';

import BoardForm from '../forms/board';

var nextId = 4;

const Boards = ({data}) => {

    const [boards, setBoards] = useState(data.boards);
    const [board, setBoard] = useState({});
    const [modify, setModify] = useState(-1);

    const deleteBoard = (id) => {
        const filteredData = boards.filter(item => item.id !== id);
        setBoards(filteredData);
    }
    
    const openModifyBoard = (id, item) => {
        setBoard(item);
        console.log(item);
        setModify(id);
    }

    const saveBoard = (item) => {
        if(item !== undefined) {
            console.log(item);
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
        <>
            {modify === -1 ?
                (<>
                    <FlatList
                        data={boards}
                        numColumns={2}
                        renderItem={({ item }) => {
                            return (
                                <BoardItem 
                                    item={item} 
                                    onDelete={() => deleteBoard(item.id)}
                                    onEdit={() => openModifyBoard(item.id, item)}
                                    onOpen={() => console.log('Open Board with id ' + item.id.toString())}
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
                    <BoardForm data={board} save={saveBoard}/>
                )
            }
        </>
    );
};

export default Boards;