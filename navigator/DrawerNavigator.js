import * as React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import Settings from '../screens/Settings'
import TabNavigator from './TabNavigator'

const Drawer= createDrawerNavigator()

export default class DrawerNavigator extends React.Component{
    render(){
        return(
            <Drawer.Navigator>
                <Drawer.Screen name= 'Home' component={TabNavigator}/>
                <Drawer.Screen name= 'Setting' component={Settings}/>
            </Drawer.Navigator>
        )
    }
}