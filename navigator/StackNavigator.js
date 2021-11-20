import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Group from '../screens/Group'
import IndiaScreen from '../screens/IndiaScreen'
import JapanScreen from '../screens/JapanScreen'
import USAScreen from '../screens/USAScreen'
import RussiaScreen from '../screens/RussiaScreen'
import SouthKoreaScreen from '../screens/SouthKoreaScreen'
import CanadaScreen from '../screens/CanadaScreen'

const Stack= createStackNavigator()

export default function StackNavigator(){
    return(
        <Stack.Navigator initialRouteName= 'Home' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={Group}/>
            <Stack.Screen name='India' component={IndiaScreen}/>
            <Stack.Screen name='Japan' component={JapanScreen}/>
            <Stack.Screen name='USA' component={USAScreen}/>
            <Stack.Screen name='Russia' component={RussiaScreen}/>
            <Stack.Screen name='South Korea' component={SouthKoreaScreen}/>
            <Stack.Screen name='Canada' component={CanadaScreen}/>
        </Stack.Navigator>
    )
}