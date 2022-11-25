import React, { useState } from 'react';
import { View } from 'react-native';
import Boards from '../boards';
import Lists from '../lists';
import Tasks from '../tasks';

const data = require('../../data/data.json');

const Container = () => {
    const [boards, setBoards] = useState(data.boards);
    const [lists, setLists] = useState(data.lists);
    const [tasks, setTasks] = useState(data.tasks);

    const [boardId, setBoardId] = useState(-1);
    const [listId, setListId] = useState(-1);

    const getListName = () => {
        var title = '';
        for(l in lists) {
            if(lists[l].id == listId) {
                title = lists[l].name;
                break;
            }
        }
        return title;
    }

    const getBoardTitle = () => {
        var title = '';
        for(b in boards) {
            if(boards[b].id == boardId) {
                title = boards[b].name;
                break;
            }
        }
        return title;
    }

    return (
        <>
            {boardId == -1 ? 
                <>
                    <Boards
                        boards={boards}
                        setBoards={setBoards}
                        setBoardId={setBoardId}
                    />
                </> 
            : listId == -1 ? 
                <>
                    <Lists
                        lists={lists}
                        boardId={boardId}
                        setLists={setLists}
                        setListId={setListId}
                        back={() => setBoardId(-1)}
                        title={getBoardTitle()}
                    /> 
                </>
            :
                <>
                    <Tasks
                        tasks={tasks}
                        listId={listId}
                        setTasks={setTasks}
                        lists={lists}
                        boardId={boardId}
                        back={() => setListId(-1)}
                        title={getListName()}
                    />
                </>
            }
        </>
    );
};

export default Container;