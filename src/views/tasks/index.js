import { FlatList, View, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, Button } from 'react-native';
import React, { useState, useEffect } from 'react';

import TaskItem from '../../components/tasks/item';
import AddButton from '../../components/buttons/add'
import TaskForm from '../../components/tasks/form';

const data = require('../../data/data.json');

var nextId = 17;



const Tasks = ({route, navigation}) => {

    const {listId, title} = route.params;
    var tasksInList = data.tasks.filter(l => l.listId == listId).sort(function(x, y) {return Number(x.isFinished) - Number(y.isFinished);});

    const [tasks, setTasks] = useState(tasksInList);
    const [task, setTask] = useState({});
    const [modify, setModify] = useState(-1);

    const deleteTask = (id) => {
        const filteredData = tasks.filter(item => item.id !== id);
        setTasks(filteredData);
        setModify(-1);
    }
    
    const openModifyTask = (id, item) => {
        setTask(item);
        setModify(id);
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
                setTasks(newTasks);
            } else {
                item.id = nextId;
                item.listId = listId;
                nextId++;
                setTasks([...tasks, item])
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
                        data={tasks}
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
                    <AddButton action={() => openModifyTask(0, {})}/>
                </>
                )
            :
                (
                    <TaskForm data={task} save={saveTask} del={deleteTask}/>
                )
            }
        </View>
    );
};

export default Tasks;