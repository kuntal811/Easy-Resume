import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, ScrollView, Image } from 'react-native'
import { FAB,List, Button,HelperText, Switch,IconButton  } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

import * as ImagePicker from 'expo-image-picker';

import ProfileImg from './../assets/profile.png'

export default class ProfileDetails extends Component {
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
        <ScrollView>
            <List.Section title="Resume Details" style={{paddingHorizontal:15}}>

                {/*#################################  Profile Details  #####################################################*/}
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
                                <View style={{position:'absolute',bottom:0,right:-5,backgroundColor:'#CCD0F6',borderRadius:30}}>
                                    <IconButton
                                        onPress={()=>this.pickImage()}
                                        style={{margin:0}}
                                        icon="camera"
                                        color="#fff"
                                    >
                                    
                                    </IconButton>
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


                {/*#################################  Education Details  #####################################################*/}
                <List.Accordion
                
                    title="Education Details"
                    titleStyle={styles.titleStyle}
                    left={props => <List.Icon {...props} color="#fff" icon="account" />}
                    style={styles.accordian}
                    theme={{colors:{text: '#fff'}}}
                    >
                    <View style={styles.accordianChildContainer}>

                        <TextInput
                            placeholder="Institute Name"
                            style={styles.inputStyle}
                            />
                        <TextInput
                            placeholder="Degree Title"
                            style={styles.inputStyle}
                            />
                        <View style={styles.durationContainer}>
                            <TextInput
                                placeholder="Start Year"
                                keyboardType="numeric"
                                style={[styles.inputStyle,{width:'48%'}]}
                                />
                            <TextInput
                                placeholder="End Year"
                                keyboardType="numeric"
                                style={[styles.inputStyle,{width:'48%'}]}
                                />
                        </View>

                        <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
                            <Text>Till Present</Text>
                            <Switch color="#555" value={true} onValueChange={()=>{}} />
                        </View>

                        <TextInput
                            placeholder="CGPA"
                            style={[styles.inputStyle,{marginTop:0}]}
                            />
                        
                        <TextInput
                            placeholder="Summery"
                            style={[styles.inputStyle,{borderRadius:10,marginBottom:10,height:100,justifyContent:'flex-start'}]}
                            multiline={true}
                            numberOfLines={7}
                            />

                        <View style={{alignItems:'center'}}>
                            <LinearGradient
                                    colors={['rgba(173,127,251,1)','rgba(146,178,253,1)']}
                                    end={{x:0.9,y:0.9}}
                                    style={[styles.buttonContainer,{marginBottom:20}]}>
                                    <Button style={styles.button} labelStyle={styles.buttonText} mode="text" color="#ffffff" onPress={()=>{}}>
                                        Add More
                                    </Button>
                            </LinearGradient>
                        </View>

                    </View>
                        
                </List.Accordion>

                {/*#################################  Experience Details  #####################################################*/}
                <List.Accordion
                
                title="Experience Details"
                titleStyle={styles.titleStyle}
                left={props => <List.Icon {...props} color="#fff" icon="account" />}
                style={styles.accordian}
                theme={{colors:{text: '#fff'}}}
                >
                <View style={styles.accordianChildContainer}>

                    <TextInput
                        placeholder="Company Name"
                        style={styles.inputStyle}
                        />
                    <TextInput
                        placeholder="Job Title"
                        style={styles.inputStyle}
                        />
                    <View style={styles.durationContainer}>
                        <TextInput
                            placeholder="Start Date"
                            keyboardType="numeric"
                            style={[styles.inputStyle,{width:'48%'}]}
                            />
                        <TextInput
                            placeholder="End Date"
                            keyboardType="numeric"
                            style={[styles.inputStyle,{width:'48%'}]}
                            />
                    </View>

                    <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
                        <Text>Till Present</Text>
                        <Switch color="#555" value={true} onValueChange={()=>{}} />
                    </View>
                    
                    <TextInput
                        placeholder="Summery"
                        style={[styles.inputStyle,{borderRadius:10,marginBottom:10,height:100,justifyContent:'flex-start'}]}
                        multiline={true}
                        numberOfLines={7}
                        />

                    <View style={{alignItems:'center'}}>
                        <LinearGradient
                                colors={['rgba(173,127,251,1)','rgba(146,178,253,1)']}
                                end={{x:0.9,y:0.9}}
                                style={[styles.buttonContainer,{marginBottom:20}]}>
                                <Button style={styles.button} labelStyle={styles.buttonText} mode="text" color="#ffffff" onPress={this._onSubmit}>
                                    Add More
                                </Button>
                        </LinearGradient>
                    </View>

                </View>
            </List.Accordion>


            {/*#################################  Project Details  #####################################################*/}
            <List.Accordion
                
                title="Project Details"
                titleStyle={styles.titleStyle}
                left={props => <List.Icon {...props} color="#fff" icon="account" />}
                style={styles.accordian}
                theme={{colors:{text: '#fff'}}}
                >
                <View style={styles.accordianChildContainer}>

                    <TextInput
                        placeholder="Project Name"
                        style={styles.inputStyle}
                        />
                    <TextInput
                        placeholder="Project Description"
                        style={styles.inputStyle}
                        />
                    <View style={styles.durationContainer}>
                        <TextInput
                            placeholder="Start Date"
                            keyboardType="numeric"
                            style={[styles.inputStyle,{width:'48%'}]}
                            />
                        <TextInput
                            placeholder="End Date"
                            keyboardType="numeric"
                            style={[styles.inputStyle,{width:'48%'}]}
                            />
                    </View>

                    <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
                        <Text>Till Present</Text>
                        <Switch color="#555" value={true} onValueChange={()=>{}} />
                    </View>
                    
                    <TextInput
                        placeholder="Summery"
                        style={[styles.inputStyle,{borderRadius:10,marginBottom:10,height:100,justifyContent:'flex-start'}]}
                        multiline={true}
                        numberOfLines={7}
                        />

                    <View style={{alignItems:'center'}}>
                        <LinearGradient
                                colors={['rgba(173,127,251,1)','rgba(146,178,253,1)']}
                                end={{x:0.9,y:0.9}}
                                style={[styles.buttonContainer,{marginBottom:20}]}>
                                <Button style={styles.button} labelStyle={styles.buttonText} mode="text" color="#ffffff" onPress={this._onSubmit}>
                                    Add More
                                </Button>
                        </LinearGradient>
                    </View>

                </View>
            </List.Accordion>

            {/*#################################  Skill Details  #####################################################*/}
            <List.Accordion
                
                title="Skill Details"
                titleStyle={styles.titleStyle}
                left={props => <List.Icon {...props} color="#fff" icon="account" />}
                style={styles.accordian}
                theme={{colors:{text: '#fff'}}}
                >
                <View style={styles.accordianChildContainer}>

                    <TextInput
                        placeholder="Skill Name"
                        style={styles.inputStyle}
                        />
                    <TextInput
                        placeholder="Skill Level"
                        style={styles.inputStyle}
                        />
                    <View style={{alignItems:'center',marginTop:10}}>
                        <LinearGradient
                            colors={['rgba(173,127,251,1)','rgba(146,178,253,1)']}
                            end={{x:0.9,y:0.9}}
                            style={[styles.buttonContainer,{marginBottom:20}]}>
                                <Button style={styles.button} labelStyle={styles.buttonText} mode="text" color="#ffffff" onPress={this._onSubmit}>
                                    Add More
                                </Button>
                        </LinearGradient>
                </View>

                </View>
            </List.Accordion>

            {/*#################################  Hobby Details  #####################################################*/}
            <List.Accordion
                
                title="Hobby Details"
                titleStyle={styles.titleStyle}
                left={props => <List.Icon {...props} color="#fff" icon="account" />}
                style={styles.accordian}
                theme={{colors:{text: '#fff'}}}
                >
                <View style={styles.accordianChildContainer}>

                    <TextInput
                        placeholder="Hobby Name"
                        style={styles.inputStyle}
                        />
                    <View style={{alignItems:'center',marginTop:10}}>
                        <LinearGradient
                            colors={['rgba(173,127,251,1)','rgba(146,178,253,1)']}
                            end={{x:0.9,y:0.9}}
                            style={[styles.buttonContainer,{marginBottom:20}]}>
                                <Button style={styles.button} labelStyle={styles.buttonText} mode="text" color="#ffffff" onPress={this._onSubmit}>
                                    Add More
                                </Button>
                        </LinearGradient>
                    </View>

                </View>
            </List.Accordion>

            {/*#################################  Language Details  #####################################################*/}
            <List.Accordion
                
                title="Language Details"
                titleStyle={styles.titleStyle}
                left={props => <List.Icon {...props} color="#fff" icon="account" />}
                style={styles.accordian}
                theme={{colors:{text: '#fff'}}}
                >
                <View style={styles.accordianChildContainer}>

                    <TextInput
                        placeholder="Language Name"
                        style={styles.inputStyle}
                        />
                    <TextInput
                        placeholder="Level"
                        style={styles.inputStyle}
                        />
                    <View style={{alignItems:'center',marginTop:10}}>
                        <LinearGradient
                            colors={['rgba(173,127,251,1)','rgba(146,178,253,1)']}
                            end={{x:0.9,y:0.9}}
                            style={[styles.buttonContainer,{marginBottom:20}]}>
                                <Button style={styles.button} labelStyle={styles.buttonText} mode="text" color="#ffffff" onPress={this._onSubmit}>
                                    Add More
                                </Button>
                        </LinearGradient>
                    </View>

                </View>
            </List.Accordion>
            </List.Section>

            <View style={{marginTop:10}}>
                <LinearGradient
                    colors={['rgba(173,127,251,1)','rgba(146,178,253,1)']}
                    end={{x:0.9,y:0.9}}
                    >
                        <Button style={styles.nextButton} labelStyle={styles.nextButtonText} mode="text" color="#ffffff" onPress={()=>this.props.navigation.push('ChooseTemplate')}>
                            Next
                        </Button>
                </LinearGradient>
            </View>

        </ScrollView>
        )
    }
}

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