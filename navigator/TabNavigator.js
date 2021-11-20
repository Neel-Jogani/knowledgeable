import * as React from'react'
import { StyleSheet } from 'react-native'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {RFValue} from 'react-native-responsive-fontsize'

import AddStory from '../screens/AddStory'
import Feed from '../screens/Feed'
import StackNavigator from './StackNavigator'

const Tab= createMaterialBottomTabNavigator()

export default class TabNavigator extends React.Component{
    render(){
        return(
            <Tab.Navigator labeled= {false} 
                        barstyle={styles.tab}
                        screenOptions={({route})=>({
                                tabBarIcon: ({focused,color,size})=>{
                                    let icon_name;
                                    if(route.name==='Feed'){
                                        icon_name= focused?"bookmarks":"bookmarks-outline"
                                    }
                                    else if(route.name==='AddStory'){
                                        icon_name= focused?"add-circle":"add-circle-outline"
                                    }
                                    else if(route.name==='Group'){
                                        icon_name= focused?"people":"people-outline"
                                    }
                                    return(
                                        <Ionicons name={icon_name}
                                                    size={RFValue(20)}
                                                    color={color}
                                                    style={styles.icon}/>
                                    )
                                }
                        })}
                        
                        activeTintColor={'black'}
                        inactiveTintColor={'grey'}>

                <Tab.Screen name= 'Feed' component={Feed}/>
                <Tab.Screen name= 'AddStory' component={AddStory}/>
                <Tab.Screen name= 'Group' component={StackNavigator}/>
            </Tab.Navigator>
        )
    }
    
}

const styles= StyleSheet.create({
    tab:{
        backgroundColor: 'lightblue',
        height: '20%',
        borderTopLeftRadius: RFValue(40),
        borderTopRightRadius: RFValue(40),
        position: 'absolute',
        overflow: 'hidden'
    },
    icon:{
        resizeMode: 'contain',
        width: RFValue(30),
        height: RFValue(30)
    }
})
