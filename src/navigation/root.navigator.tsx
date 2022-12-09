import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Text } from "react-native";
import MainNavigator from './main.navigator';
import { RootRoutes, RootStack } from './routes';


const Root = () => {

    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name={RootRoutes.Main} component={MainNavigator} />
        </RootStack.Navigator>
    )
}
export default Root