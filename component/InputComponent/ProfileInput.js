import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, ScrollView, Image } from 'react-native'
import { FAB,List, Button,HelperText, Switch  } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

import * as ImagePicker from 'expo-image-picker';

import ProfileImg from './../../assets/profile.png'
import { styles } from './InputStyles';

export default class ProfileInput extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             profilePhoto: ProfileImg,
        }
    }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
    
        if (!result.cancelled) {
          this.setState({
                profilePhoto: {uri: result.uri}
          });
        }
      }
      
    render() {
        return (
            <List.Accordion
            title="Profile Details"
            titleStyle={styles.titleStyle}
            left={props => <List.Icon {...props} color="#fff" icon="account" />}
            style={styles.accordian}
            theme={{colors:{text: '#fff'}}}
            >
            <View style={styles.accordianChildContainer}>

                <View style={{flexDirection:'row', justifyContent:'center',marginTop:10}}>
                    <View>
                        <Image source={this.state.profilePhoto} style={{height:100,width:100,borderRadius:100}}></Image>
                        <View style={{position:'absolute',bottom:0,right:0}}>
                            <Button
                                onPress={()=>this.pickImage()}
                                style={{padding:5,backgroundColor:'#D8D8D8',borderRadius:20}}
                            >
                            T
                            </Button>
                        </View>
                    </View>
                </View>
                <TextInput
                    placeholder="Full Name"
                    style={styles.inputStyle}
                    />
                <TextInput
                    placeholder="Email"
                    style={styles.inputStyle}
                    keyboardType="email-address"
                    />
                <TextInput
                    placeholder="Phone"
                    style={styles.inputStyle}
                    keyboardType="numeric"
                    />
                <TextInput
                    placeholder="Summery"
                    style={[styles.inputStyle,{borderRadius:10,marginBottom:10,height:100,justifyContent:'flex-start'}]}
                    multiline={true}
                    numberOfLines={7}
                    />

            </View>
        </List.Accordion>

        )
    }
}
/*
const styles = StyleSheet.create({
    background:{
      flex:1,
      position:'absolute',
      height:'100%',
      width:'100%',
      zIndex:-1
  },
    accordian:{
        backgroundColor:'#AD7FFB',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        marginTop:10,
    },
    titleStyle:{
        color:'#fff',
        fontWeight:'bold'
    },
    accordianChildContainer:{
        backgroundColor:'#CCD0F688',
        paddingLeft:10,
        paddingHorizontal :10
    },
    inputStyle:{
        height: 50,
        marginTop:10,
        paddingHorizontal: 20,
        backgroundColor:'#ffffff',
        borderRadius:40,
        //borderTopRightRadius:40,
        //borderTopLeftRadius:40,
        elevation:2,
        overflow:'hidden',
    },
    durationContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    buttonContainer:{
        width:'60%',
        alignItems:'center',
        borderRadius: 30,
    },
    nextButton:{
        paddingVertical: 10,
    },
    nextButtonText:{
        fontWeight:'bold',
        fontSize:20
    }
  });
  */