import * as React from 'react'
import {Text,View,StyleSheet,Image,StatusBar,Platform,SafeAreaView,FlatList} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import db from '../config'
import firebase from 'firebase'
import PostCard from './PostCard'

export default class CanadaScreen extends React.Component{
    constructor(){
        super()
        this.state={
            image: '',
            caption: '',
            posts: []
        }
    }

    read=()=>{
        db.ref('/post/CANADA').on('value', (data)=>{
            let posts= []
            if(data.val()){
              Object.keys(data.val()).forEach(function(keys){
                posts.push({
                  key:keys,
                  value: data.val()[keys]
                })
              })
              
            }
            this.setState({
                posts:posts
            })
            console.log(posts)

          },function(error){
            console.log('Stories failed to be fetched'+ error.code)
          })
    }

    componentDidMount=()=>{
        this.read()
    }

    keyExtractor=(item,index)=>{
        index.toString()       
    }

    renderItems=({item:post})=>{
        return(
            <PostCard post={post}/>
        )
    }
    

    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.titleContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={require('../assets/logo.png')} style={styles.logo}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Canada</Text>
                    </View> 
                </View>
                <View style={styles.flatlistContainer}>
                <FlatList keyExtractor={this.keyExtractor}
                              data={this.state.posts}
                              renderItem={this.renderItems}/>
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
        textAlign: 'center',
    },
    flatlistContainer:{
        flex:0.85
    }
})