import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Boards from '../views/toodler';
import Lists from '../views/List';

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Boards">
            <Stack.Screen name="Boards" component={Boards} />
            <Stack.Screen name="Lists" component={Lists} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;