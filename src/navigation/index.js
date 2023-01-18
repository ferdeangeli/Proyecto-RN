import React from 'react'
import BottomTabNavigator from './BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

export default () => {

    const userId = useSelector((state) => state.auth.userId)

    return(
        <NavigationContainer>
            <BottomTabNavigator />
        </NavigationContainer>
    )
}

