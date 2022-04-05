
import React from 'react'
import Home from './src/screens/DebitScreen'
import { Image } from 'react-native'
import WeeklyLimit from './src/screens/WeeklyLimitScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { LOGO } from './src/constants';
// import { Provider } from 'react-redux'
// import {store} from './src/redux/store'


// const store = store()

export default function RootNavigation() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false
    }

    return (
        // <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='Limit' component={WeeklyLimit}/>
                </Stack.Navigator>
            </NavigationContainer>
        // </Provider>


    )
}
