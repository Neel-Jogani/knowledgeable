import * as React from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import firebase from 'firebase'
import * as Google from 'expo-google-app-auth' 
import { RFValue } from 'react-native-responsive-fontsize'
import db from '../config'

export default class LoginScreen extends React.Component{

    signInWithGoogleAsync=async()=>{
        try {
          const result = await Google.logInAsync({
            behaviour: 'web',
            androidClientId: '647575990852-pm14thkltjv9ttt2kq5ohn1uamsd1rp4.apps.googleusercontent.com',
            iosClientId: '647575990852-hjho4dcit43l989rq3pgmkap0scv6cd1.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
          });
      
          if (result.type === 'success') {
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
      }

      onSignIn=(googleUser)=>{
          var unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            unsubscribe()
            if(!this.isUserEqual(googleUser,firebaseUser)){
                var credential= firebase.auth.GoogleAuthProvider.credential(
                googleUser.idToken, 
                googleUser.accessToken)
                firebase.auth().signInWithCredential(credential)
                .then(function(result){
                    if(result.additionalUserInfo.isNewUser){
                        db.ref('/users/' + result.user.uid).set({
                            gmail: result.user.email,
                            profilepicture: result.additionalUserInfo.profile.picture,
                            firstName: result.additionalUserInfo.profile.given_name,
                            lastName: result.additionalUserInfo.profile.family_name
                        })

                        .then(function(snapshot){})
                    }
                })
                .catch((eror)=>{
                    console.log(error.message)
                })
            }

            else{
                console.log('user is already signed in')
            }
        })
      }

       isUserEqual=(googleUser, firebaseUser)=>{
        if (firebaseUser) {
          const providerData = firebaseUser.providerData;
          for (let i = 0; i < providerData.length; i++) {
            if (providerData[i].providerId === GoogleAuthProvider.PROVIDER_ID &&
                providerData[i].uid === googleUser.getBasicProfile().getId()) {
              return true;
            }
          }
        }
        return false;
      }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.loginButton} onPress={this.signInWithGoogleAsync()}>
                    <Text style={styles.loginText}> Login </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButton:{
        width: '60%',
        height: RFValue(50),
        backgroundColor: 'purple',
        borderRadius: RFValue(30),
        borderWidth: RFValue(2)
    },
    loginText:{
        fontSize: RFValue(40),
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    }

})