import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Pressable } from 'react-native'
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-paper';
export class ResumeCard extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageWrapper}>
                    <Image styele={styles.cardImage} source={this.props.photo?this.props.photo:require('./../assets/resumeProfile.png')}/>
                </View>
                <View style={styles.details}>
                    <Text style={styles.name}>{this.props.name?this.props.name:""}</Text>
                    <Text style={styles.email}>{this.props.email?this.props.email:""}</Text>
                </View>
                <Pressable
                    style={styles.actionButton}
                    onPress={() => console.log('Pressed')}
                >
                    <MCIcons name="dots-vertical" size={25}/>
                </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',       
        backgroundColor: '#ffffff',
        borderRadius: 5,
        paddingVertical:15,
        paddingHorizontal: 14,
        elevation:0,
        marginBottom:15,
    },
    imageWrapper:{
        width: '20%',
        backgroundColor:'#dddddd',
        borderRadius: 50,
    },
    cardImage:{
        marginTop: 24,
    },
    details:{
        width: '80%',
        flexDirection:'column',
    },
    name:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#444444',
        textAlign:'center',
    },
    email:{
        fontSize: 16,
        fontWeight: '600',
        color: '#444444',
        textAlign:'center',
    },
    actionButton:{
        position:'absolute',
        top:0,
        right:0,
        paddingVertical:5,
        paddingHorizontal:1,
    }
});

export default ResumeCard
