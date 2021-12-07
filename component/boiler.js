import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
//import {} from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient';
export class SignIn extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['rgba(245,148,183,1)', 'rgba(173,127,251,1)','rgba(146,178,253,1)']}
                    style={styles.background}
                    end={{x:0.9,y:0.9}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    background:{
        flex:1,
        position:'absolute',
        height:'100%',
        width:'100%',
    }
});


export default SignIn
