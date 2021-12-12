import React, { Component } from 'react'
import { Text, View, StyleSheet,Dimensions, Image, ActivityIndicator } from 'react-native'
//import { ActivityIndicator } from 'react-native-paper';
import Icon from './../assets/icon.png'
export default class Loading extends Component {
    
    render() {
        const windowWidth = Dimensions.get('window').width;
        const windowHeight = Dimensions.get('window').height;
        return (
            <View  style={[styles.linearGradient,{height:windowHeight,width:windowWidth}]}>

                <View style={styles.container}>
                    <Image source={Icon} style={styles.logo}/>
                    <ActivityIndicator size="large" color="#AF7DFB" />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    logo:{
        height:200,
        width: 200
    }
})