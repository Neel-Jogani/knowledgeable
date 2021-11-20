import * as React from 'react'
import {Text,View,StyleSheet,Image,SafeAreaView,Platform,StatusBar} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export default class Header extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.titleContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={require('../assets/logo.png')} style={styles.logo}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Knowledgeable</Text>
                    </View> 
                </View>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#c8c2ff',
    },
    droidSafeArea:{
        marginTop: Platform.OS==='android'?StatusBar.currentHeight:0
    },
    titleContainer:{
        flex: 0.07,
        flexDirection: 'row',
        backgroundColor: '#342e85'
    },
    imageContainer:{
        flex:0.3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple'
    },
    logo:{
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    textContainer:{
        flex:0.7,
        justifyContent: 'center',
       
    },
    title:{
        color: 'white',
        fontSize: RFValue(25),
    }
})