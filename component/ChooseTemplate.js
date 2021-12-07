import React, { Component } from 'react'
import { Text, View, ScrollView,Image, StyleSheet, Pressable, Alert} from 'react-native'
import { Button,Checkbox } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';


import resumeThumb from './../assets/profile.png'


export default class ChooseTemplate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             checkid:0
        }
    }
    
    render() {
        let {checkid}  = this.state;
        console.log('resuem data printing');
        console.log(this.props.route.params.resumeData);
        return (
            <>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Pressable
                            onPress={()=>this.setState({checkid:1})}
                        >
                            <Image source={require('./../assets/resume.png')} style={styles.image} resizeMode="contain"/>
                        </Pressable>
                        {checkid===1?
                            <View style={styles.checkbox}>
                                <MaterialCommunityIcons name="check-circle" size={40} color="#92B2FD"/>
                            </View>
                            :
                            null
                        }
                    </View>



                    <View style={styles.imageContainer}>
                        <Pressable
                            onPress={()=>this.setState({checkid:2})}
                        >
                            <Image source={require('./../assets/resume.png')} style={styles.image} resizeMode="contain"/>
                        </Pressable>
                        {checkid===2?
                            <View style={styles.checkbox}>
                                <MaterialCommunityIcons name="check-circle" size={40} color="#92B2FD"/>
                            </View>
                            :
                            null
                        }
                    </View>


                    <View style={styles.imageContainer}>
                        <Pressable
                            onPress={()=>this.setState({checkid:8})}
                        >
                            <Image source={require('./../assets/resume.png')} style={styles.image} resizeMode="contain"/>
                        </Pressable>
                        {checkid===8?
                            <View style={styles.checkbox}>
                                <MaterialCommunityIcons name="check-circle" size={40} color="#92B2FD"/>
                            </View>
                            :
                            null
                        }
                    </View>


                    <View style={styles.imageContainer}>
                        <Pressable
                            onPress={()=>this.setState({checkid:3})}
                        >
                            <Image source={require('./../assets/resume.png')} style={styles.image} resizeMode="contain"/>
                        </Pressable>
                        {checkid===3?
                            <View style={styles.checkbox}>
                                <MaterialCommunityIcons name="check-circle" size={40} color="#92B2FD"/>
                            </View>
                            :
                            null
                        }
                    </View>

                    <View style={styles.imageContainer}>
                        <Pressable
                            onPress={()=>this.setState({checkid:4})}
                        >
                            <Image source={require('./../assets/resume.png')} style={styles.image} resizeMode="contain"/>
                        </Pressable>
                        {checkid===4?
                            <View style={styles.checkbox}>
                                <MaterialCommunityIcons name="check-circle" size={40} color="#92B2FD"/>
                            </View>
                            :
                            null
                        }
                    </View>

                    <View style={styles.imageContainer}>
                        <Pressable
                            onPress={()=>this.setState({checkid:5})}
                        >
                            <Image source={require('./../assets/resume.png')} style={styles.image} resizeMode="contain"/>
                        </Pressable>
                        {checkid===5?
                            <View style={styles.checkbox}>
                                <MaterialCommunityIcons name="check-circle" size={40} color="#92B2FD"/>
                            </View>
                            :
                            null
                        }
                    </View>


                </View>
            </ScrollView>
            {checkid!=0?
                <View style={{marginTop:10,width:'100%',position:'absolute',bottom:0}}>
                    <LinearGradient
                        colors={['rgba(173,127,251,1)','rgba(146,178,253,1)']}
                        end={{x:0.9,y:0.9}}
                        >
                            <Button style={styles.nextButton} labelStyle={styles.nextButtonText} mode="text" color="#ffffff" onPress={()=>{this.props.navigation.push('Preview',{ResumeId:checkid})}}>
                                Preview
                            </Button>
                    </LinearGradient>
                </View>
            :
                null
            }
            </>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',

        justifyContent:'flex-start',
        alignItems:'flex-end',
        flexWrap:'wrap',
        paddingBottom:70,
    },
    imageContainer:{
        position:'relative',
        width:'50%',
        height:200,
        padding:5,
    },
    image:{
        borderRadius: 5,
        width:'100%',
        height:'100%'
    },
    checkbox:{
        position:'absolute',
        zIndex:1,
        top: 0,
        left:0,
        bottom:0,
        right:0,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0008',
        marginVertical:5,
        marginHorizontal:16,
        borderRadius:5,
    },
    nextButton:{
        paddingVertical: 10,
    },
    nextButtonText:{
        fontWeight:'bold',
        fontSize:20
    }
})