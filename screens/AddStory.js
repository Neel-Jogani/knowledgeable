import * as React from 'react'
import {Text,View,StyleSheet,Image,SafeAreaView,Platform,StatusBar,TextInput, TouchableOpacity} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import * as ImagePicker from 'expo-image-picker'
import db from '../config'
import firebase from 'firebase'

export default class AddStory extends React.Component{
    constructor(){
        super()
        this.state={
            topic: '',
            caption: '',
            image: ''
        }
    }

    createPost=(country)=>{
        var random= Math.random().toString(36).slice(2)
        db.ref('/post/' + country + '/'+ random).update({
            image: this.state.image,
            topic: this.state.topic,
            caption: this.state.caption,
            likes:0
        })
    }

    getPermission=async()=>{
        if(Platform.OS!=='web'){
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    pickImage=async()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if(!result.cancelled){
              this.setState({
                  image: result.uri
              })
          }
    }

    componentDidMount(){
        this.getPermission()
    }

    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.titleContainer}>
                    <View style={styles.imageContainer} >
                        <Image source={require('../assets/logo.png')} style={styles.logo}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Knowledgeable</Text>
                    </View> 
                </View>
                <View style={styles.fieldContainer}>
                    <Image source={{uri: this.state.image}} style={styles.uploadImage}/>
                    <TouchableOpacity style={styles.uploadButton} onPress={()=>{this.pickImage()}}>
                        <Text style={styles.uploadText}>Click to upload Image</Text>
                    </TouchableOpacity>
                    <TextInput placeholder={'Topic'}
                               onChangeText={(text)=>{this.setState({
                                   topic: text.toUpperCase()
                               })}}
                               style={styles.textInput}
                               value={this.state.topic}/>
                     <TextInput placeholder={'Caption'}
                               onChangeText={(text)=>{this.setState({
                                   caption: text
                               })}}
                               style={styles.textInput}
                               value={this.state.caption}/>
                </View>
                        <TouchableOpacity style={styles.submitButton} onPress={()=>{this.createPost(this.state.topic)}}>
                            <Text style={styles.submitText}>Submit</Text>
                        </TouchableOpacity>
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
    },
    logo:{
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },
    textContainer:{
        flex:0.7,
        justifyContent: 'center',
       
    },
    title:{
        color: '#010a5e',
        fontSize: RFValue(25),
    },
    fieldContainer:{
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    uploadImage:{
        width: RFValue(200),
        height: RFValue(200),
        resizeMode: 'contain',
        borderWidth: RFValue(2),
        borderColor: 'purple',
        marginBottom: RFValue(10)
    },
    uploadButton:{
        width: RFValue(160),
        height: RFValue(50),
        backgroundColor: '#7864a1',
        borderWidth: 2,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: RFValue(15)
    },
    uploadText:{
        fontSize: RFValue(15),
        fontWeight: 'bold',
        color:'white',
        textAlign: 'center'
    },
    textInput:{
        borderWidth: 2,
        width: '80%',
        height: RFValue(25),
        alignItems: 'center',
        marginTop: RFValue(25),
        textAlign:'center'
    },
    submitButton:{
        width: '45%',
        height: RFValue(50),
        borderWidth: 2,
        borderRadius: RFValue(15),
        backgroundColor: '#7864a1',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    submitText:{
        fontSize: RFValue(15),
        fontWeight: 'bold',
        color:'white',
        textAlign: 'center' 
    }
})