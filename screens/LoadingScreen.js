import * as React from 'react'
import { StyleSheet,Text,View } from 'react-native' 
import firebase from 'firebase'

export default class LoadingScreen extends React.Component{

    checkIfLoggedIn=()=>{
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.props.navigation.navigate('DashboardScreen')
            }
            else{
                this.props.navigation.navigate('LoginScreen')
            }
        })
    }
    
    componentDidMount(){
        this.checkIfLoggedIn()
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Loading....</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey'
    },
    text:{
        fontSize: 40,
        fontWeight: 'bold',
        color: 'red',
    },
})