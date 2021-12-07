import React from 'react'
import { View, StyleSheet} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'

import { Drawer, Text, Avatar } from 'react-native-paper'
import ProfileImg from './../assets/profile.png'

export default function DrawerContent(props) {
    return (
           
            <View style={styles.container}>
                <DrawerContentScrollView {...props}>
                    <View style={styles.bgWhite}>
                        <View style={styles.profileContainer}>
                            <LinearGradient
                                colors={['rgba(173,127,251,1)','rgba(146,178,253,1)']}
                                end={{x:0.9,y:0.9}}
                                style={styles.background}
                                >
                                <View style={styles.profile}>
                                    <Avatar.Image
                                        source={ProfileImg}
                                        size={100}
                                    />
                                    <Text>Kuntal Sarkar</Text>
                                    <Text>KuntalSarkar00</Text>
                                </View>
                            </LinearGradient>
                            
                        </View>
                        <View style={styles.drawerContainer}>
                        <Drawer.Section>
                            <DrawerItem
                                label="Dashboard"
                                onPress={()=>{props.navigation.navigate('Dashboard')}}
                            />
                            <DrawerItem
                                label="Home"
                                onPress={()=>{props.navigation.navigate('Home')}}
                            />
                            <DrawerItem
                                label="Home"
                                onPress={()=>{props.navigation.navigate('Home')}}
                            />

                        </Drawer.Section>
                        </View>
                    </View>
                </DrawerContentScrollView>
                <Drawer.Section>
                    <DrawerItem
                        label="Sign Out"
                        onPress={()=>{}}
                    />

                </Drawer.Section>
            </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    background:{
        flex:1
    },
    profileContainer:{
        /*height:100*/
    },
    drawerContainer:{
        backgroundColor:'#fff'
    },
    profile:{
        padding: 10,
        justifyContent:'center',
        alignItems: 'center',
    }
    ,
    bgWhite:{ backgroundColor:'#fff'},
})