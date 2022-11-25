import { FlatList, View, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

import TaskItem from '../../components/tasks/item';
import AddButton from '../../components/buttons/add'
import TaskForm from '../../components/tasks/form';
import Header from '../../components/header';
import BackButton from '../../components/buttons/back';

var nextId = 17;

const Tasks = ({tasks, setTasks, listId, lists, boardId, back, title}) => {

    var tasksInList = tasks.filter(l => l.listId == listId);

    const [task, setTask] = useState({});
    const [modify, setModify] = useState(-1);

    const deleteTask = (id) => {
        const filteredData = tasks.filter(item => item.id !== id);
        saveTasks(filteredData);
        setModify(-1);
    }
    
    const openModifyTask = (id, item) => {
        setTask(item);
        setModify(id);
    }

    const saveTasks = (tasks) => {
        tasks.sort(function(x, y) {
            return Number(x.isFinished) - Number(y.isFinished);
        });
        setTasks(tasks);
    }

    const saveTask = (item) => {
        if(item !== undefined) {
            if('id' in item) {
                const newTasks = tasks.map(task => {
                    if(task['id'] == item['id']) {
                        return item;
                    }
                    return task;
                });
                saveTasks(newTasks);
            } else {
                item.id = nextId;
                item.listId = listId;
                nextId++;
                saveTasks([...tasks, item])
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
                        data={tasksInList}
                        numColumns={1}
                        renderItem={({ item }) => {
                            return (
                                <TaskItem 
                                    item={item} 
                                    onModify={() => openModifyTask(item.id, item)}
                                    onOpen={() => {
                                        item.isFinished = !item.isFinished;
                                        saveTask(item);
                                    }}
                                />
                            );
                        }}
                        keyExtractor={(task) => task.id}
                    />
                    <BackButton action={back}/>
                    <AddButton action={() => openModifyTask(0, {})}/>
                </>
                )
            :
                (
                    <TaskForm data={task} save={saveTask} del={deleteTask} boardId={boardId} allLists={lists}/>
                )
            }
        </View>
    );
};

export default Tasks;