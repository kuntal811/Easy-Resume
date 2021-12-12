import React from 'react'
import { View, StyleSheet, Dimensions,StatusBar} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Drawer, Text, Avatar } from 'react-native-paper'
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ERContext, useERContext } from '../ERContext';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import ProfileImg from './../assets/profile.png'


async function signOut(){
    try {
        await AsyncStorage.removeItem('token',()=>{
            const ERContext = useERContext();
            ERContext.changeState('isLoggedIn',false);
        });

      } catch(e) {
        console.log(e);
      }
}
class DrawerContent extends React.Component{
    _signOut = async()=>{
        try {
            await AsyncStorage.removeItem('token',()=>{
                this.context.changeState('isLoggedIn',false);
            });
    
          } catch(e) {
            console.log(e);
          }
    }

    render(){
        let props = this.props;
        return (     
            <DrawerContentScrollView {...props} style={{backgroundColor:'white'}} contentContainerStyle={{paddingTop:0,backgroundColor:'#92B2FD'}}>

                    <View style={[styles.bgWhite]} >
                        <View style={styles.profileContainer}>
                        <LinearGradient
                                // Background Linear Gradient
                                colors={['rgba(245,148,183,1)', 'rgba(173,127,251,1)','rgba(146,178,253,1)']}
                                style={styles.background}
                                end={{x:0.9,y:0.9}}
                            >
                                <View style={styles.profile}>
                                    <Avatar.Image
                                        source={ProfileImg}
                                        size={100}
                                    />
                                    <Text style={styles.name}>{this.context.name}</Text>
                                    <Text style={styles.email}>{this.context.email}</Text>
                                </View>
                            </LinearGradient>
                            
                        </View>
                        <View style={styles.drawerContainer}>
                            <Drawer.Section>
                                <DrawerItem
                                    label="Home"
                                    labelStyle={styles.drawerLabel}
                                    onPress={()=>{props.navigation.navigate('Dashboard')}}
                                    icon={()=><MCIcons name="home-variant-outline" color="#555" size={25}/>}
                                />
                                <DrawerItem
                                    label="Share App"
                                    labelStyle={styles.drawerLabel}
                                    onPress={()=>{props.navigation.navigate('Home')}}
                                    icon={()=><MCIcons name="share-variant" color="#555" size={25}/>}
                                />
                                <DrawerItem
                                    label="About"
                                    labelStyle={styles.drawerLabel}
                                    onPress={()=>{props.navigation.navigate('Home')}}
                                    icon={()=><MCIcons name="information-variant" color="#555" size={25}/>}
                                />
                                <DrawerItem
                                    label="Sign Out"
                                    labelStyle={styles.drawerLabel}
                                    onPress={this._signOut}
                                    icon={()=><MCIcons name="logout" color="#555" size={25}/>}
                                />
                            </Drawer.Section>
                            
                        </View>
                    </View>
                </DrawerContentScrollView>
            

    )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red'
    },
    background:{
        flex:1,
    },
    profileContainer:{
        /*height:100*/
    },
    drawerContainer:{
        padding:15,
        backgroundColor:'#fff',
    },
    profile:{
        paddingTop:StatusBar.currentHeight+30,
        padding:0,
        justifyContent:'center',
        alignItems: 'center',
        shadowColor: "#000",
    },
    name:{
        paddingTop:15,
        fontWeight:'700',
        color:'#fff',
        fontSize:20,
    },
    email:{
        paddingVertical:20,
        paddingTop:5,
        fontWeight:'500',
        color:'#fff',
        fontSize:16,
    },
    bgWhite:{
        backgroundColor:'#fff'
    },
    drawerLabel:{
        fontWeight:'bold',
        color:'#555'
    }
})

DrawerContent.contextType = ERContext;
export default DrawerContent