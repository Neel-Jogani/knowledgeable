
import React, * as react from 'react'
import {Text,View,TouchableOpacity, Image,StyleSheet,TextInput} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import db from '../config'

export default class PostCard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            postId: this.props.post.key,
            postData: this.props.post.value,
            
        }
    }
    updateLikes=()=>{
        var country= this.state.postData.topic.toUpperCase()
        db.ref('/post/'+ country + '/' +this.state.postId).update({
            likes:this.state.postData.likes+1
        })

    }
    render(){
        let post= this.state.postData
        return(
            <View style={styles.container}>
                <Image source={{uri: 'https://image.shutterstock.com/image-vector/color-tone-picker-assistant-blend-260nw-1206823129.jpg'}} style={styles.image}/>
                <Text style={styles.captionText}>{this.state.postData.caption}</Text>
                <View>
                    <TouchableOpacity style={styles.likeButton} onPress={()=>{
                        this.updateLikes()
                    }}>
                        <Text style={styles.likeText}>{this.state.postData.likes}</Text>
                        <Image source={require('../assets/heart.png')} style={styles.likeButtonImage}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#4508a6',
        marginTop: RFValue(20),
        width: '80%',
        alignSelf: 'center',
        borderRadius: RFValue(20),
        borderWidth: RFValue(2),
        borderColor: '#bca9db'
    },
    image:{
        width: RFValue(280),
        height: RFValue(320),
        resizeMode: 'contain',
        borderRadius: RFValue(20),
        alignSelf: 'center',
    },
    captionText:{
        fontSize: RFValue(30),
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: RFValue(-50),
        marginBottom: RFValue(20)
    },
    likeButtonImage:{
        width: RFValue(30),
        height: RFValue(30),
        resizeMode: 'contain',
        margin: RFValue(4),
        //position: 'absolute',
        // right: RFValue(30),
        // bottom: RFValue(8)
    },
    likeText:{
        fontSize: RFValue(20),
        fontWeight: 'bold',
        // position: 'absolute',
        // right: RFValue(15),
        // bottom: RFValue(13),
        color: 'white',
    },
    likeButton:{
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c8bdff',
        width: RFValue(100),
        marginBottom: RFValue(15),
        borderRadius: RFValue(10)
    }

})
