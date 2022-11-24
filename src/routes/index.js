import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Boards from '../views/boards';
import Lists from '../views/lists';
import Tasks from '../views/tasks';


const Stack = createStackNavigator();

const Routes = ({fun}) => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Boards">
            <Stack.Screen name="Boards" component={Boards}
                options={{
                title: 'Toodler',
                headerStyle: {
                    backgroundColor: '#fafafafa',
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    textAlign: 'center'
                },
        }}/>
            <Stack.Screen name="Lists" component={Lists} />
            <Stack.Screen name="Tasks" component={Tasks} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;