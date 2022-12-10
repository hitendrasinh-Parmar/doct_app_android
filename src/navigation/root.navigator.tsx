import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Text } from "react-native";
import AuthNavigator from './auth.navigator';
import MainNavigator from './main.navigator';
import { RootRoutes, RootStack } from './routes';


const tempvalidUser = false

const Root = () => {

    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            {
                tempvalidUser ? <RootStack.Screen name={RootRoutes.Main} component={MainNavigator} /> :
                    <RootStack.Screen name={RootRoutes.Auth} component={AuthNavigator} />

            }
        </RootStack.Navigator>
    )
}
export default Root