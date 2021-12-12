import React, { Component } from 'react'
import {Image, View, StyleSheet, Text } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native-paper';

export default class OnboardingScreen extends Component {   
  storeData = async (key,value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        Alert.alert("Error","Something went wrong in the onboarding screen");
    }
  }
  hideOnBoardingScreen = ()=>{
    this.storeData('isFirstTime',{firstTime:'No'});
    //this.props.onStatusChange(false);
  }
  render() {
          return (
            <View style={styles.container}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['rgba(245,148,183,1)', 'rgba(173,127,251,1)','rgba(146,178,253,1)']}
                    style={styles.background}
                    end={{x:0.9,y:0.9}}
                />
              <Onboarding
                  onSkip={()=>{this.hideOnBoardingScreen()}}
                  onDone={()=>{this.hideOnBoardingScreen()}}
                  bottomBarColor="transparent"
                  bottomBarHeight={65}
                  titleStyles={{fontFamily: 'Roboto',fontWeight:'bold'}}
                  subTitleStyles = {{fontFamily: 'Roboto'}}
                  bottomBarHighlight = {false}
                  DoneButtonComponent={()=>{
                    return <Button style={styles.startButton} mode="contained" onPress={() => {this.hideOnBoardingScreen();this.props.onClickStart()}}>
                            Done
                          </Button>
                  }}
                  pages={[
                      {
                      backgroundColor: 'transparent',
                      image: <Image style={{height:170,width:280}} source={require('./../assets/onboarding.png')} />,
                      title: 'Easy Resume',
                      subtitle: 'Make resume in simple 3 steps',
                      },
                      {
                      backgroundColor: 'transparent',
                      image: <Image style={{height:170,width:280}} source={require('./../assets/onboarding.png')} />,
                      title: 'Step 1',
                      subtitle: 'Fill necessary details',
                      },
                      {
                      backgroundColor: 'transparent',
                      image: <Image style={{height:170,width:280}} source={require('./../assets/onboarding.png')} />,
                      title: 'Step 2',
                      subtitle: 'Choose a template',
                      },
                      {
                      backgroundColor: 'transparent',
                      image: <Image style={{height:170,width:280}} source={require('./../assets/onboarding.png')} />,
                      title: 'Step 3',
                      subtitle: 'Download and Share',
                      },
                  ]}
                  />
            </View>
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
    startButton:{
      backgroundColor: '#fff',
      marginRight: 5,
    }
});