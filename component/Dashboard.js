import React, { Component } from 'react'
import { Text, View, StyleSheet, Pressable, SafeAreaView } from 'react-native'
import AppBar from './AppBar'
import { FAB,List } from 'react-native-paper';
import 'react-native-gesture-handler';

import ResumeCard from './ResumeCard';
import ProfileDetails from './ProfileDetails';

import { createDrawerNavigator } from '@react-navigation/drawer';

export class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             itemsCount:1,
        }
    }
    
    render() {
       //const userNav = createDrawerNavigator();

       let { navigation } = this.props;
        return (
            <>
                <FAB
                    style={styles.fab}
                    icon="plus"
                    color="#ffffff"
                    onPress={()=>this.props.navigation.push('Profile')}
                />
                
                {this.state.itemsCount === 0 ?
                    <View style={styles.noResumeContainer}>
                        <Text style={styles.noResumeText}>
                        You have not created any resume.
                        To create one click one plus (+) button
                        </Text>
                    </View>
                    :
                    // Resumes
                    <View style={styles.resumeContainer}>
                        <ResumeCard name="Kuntal Sarkar" email="kuntalsarkar00@gmail.com"/>
                        <ResumeCard name="M. Dhivya" email="M.dhivya00@gmail.com"/>
                        <ResumeCard name="Rahul Saha" email="RahulSaha@gmail.com"/>
                    </View>
                }
                </>

        )
    }
}


const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 25,
      right: 0,
      bottom: 0,
      backgroundColor: '#92B2FD',
      zIndex: 1
    },
    noResumeContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    noResumeText:{
        textAlign:'center',
        fontSize: 16,
        fontWeight: '600',
        color: '#444444',
        margin: 40,
    },
    resumeContainer:{
        paddingVertical: 15,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems:'center',
        backgroundColor: '#CCD0F6',
        paddingHorizontal: 15,
    },
  })


export default Dashboard
