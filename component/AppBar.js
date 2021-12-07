import React, { Component } from 'react'
import { Appbar } from 'react-native-paper';
import { Platform, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
export class AppBar extends Component {
    render() {
        return (
            <React.Fragment>
                <Appbar.Header style={{marginTop:20}} color="red">
                    <LinearGradient
                        // Background Linear Gradient
                        colors={['rgba(245,148,183,1)', 'rgba(173,127,251,1)','rgba(146,178,253,1)']}
                        style={styles.background}
                        end={{x:0.9,y:0.9}}
                    />
                    <Appbar.Content title="Dashboard" color="#ffffff" titleStyle={styles.titleStyle}/>
                </Appbar.Header>
            </React.Fragment>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    background:{
        flex:1,
        position:'absolute',
        height:'100%',
        width:'100%',
    },
    titleStyle:{
        textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    }
});


export default AppBar
