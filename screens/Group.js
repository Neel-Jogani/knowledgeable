import * as React from 'react'
import {Text,View,StyleSheet,Image,SafeAreaView,Platform,StatusBar,TouchableOpacity} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export default class Group extends React.Component{
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
                <View style={styles.flagContainer}>
                    <TouchableOpacity style={styles.countryContainer} onPress={()=>{this.props.navigation.navigate('India')}}>
                        <Image source={require('../assets/indian_flag.jpg')} style={styles.flag}/>
                        <Text style={styles.flagText}>India</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.countryContainer} onPress={()=>{this.props.navigation.navigate('Japan')}}>
                        <Image source={require('../assets/japan_flag.jpg')} style={styles.flag}/>
                        <Text style={styles.flagText}>Japan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.countryContainer} onPress={()=>{this.props.navigation.navigate('USA')}}>
                        <Image source={require('../assets/usa_flag.png')} style={styles.flag}/>
                        <Text style={styles.flagText}>USA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.countryContainer} onPress={()=>{this.props.navigation.navigate('Russia')}}>
                        <Image source={require('../assets/russia_flag.png')} style={styles.flag}/>
                        <Text style={styles.flagText}>Russia</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.countryContainer} onPress={()=>{this.props.navigation.navigate('South Korea')}}>
                        <Image source={require('../assets/southKorea_flag.png')} style={styles.flag}/>
                        <Text style={styles.flagText}>South Korea</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.countryContainer} onPress={()=>{this.props.navigation.navigate('Canada')}}>
                        <Image source={require('../assets/canada_flag.jpg')} style={styles.flag}/>
                        <Text style={styles.flagText}>Canada</Text>
                    </TouchableOpacity>
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
    },
    flagContainer:{
        flex: 0.8,
        marginTop: RFValue(20)
    },
    countryContainer:{
        flex: 0.2,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginBottom: RFValue(20),
        marginLeft: RFValue(100)
    },
    flag:{
        width: RFValue(100),
        height: RFValue(50),
        resizeMode: 'contain',
    },
    flagText:{
        color: '#010a5e',
        fontSize: RFValue(25),
    }
})