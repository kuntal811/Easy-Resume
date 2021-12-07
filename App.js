import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button,Image,TouchableOpacity } from 'react-native';
import { Drawer, DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import  {name as appName } from './app.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from "@react-native-community/netinfo";
import { LinearGradient } from 'expo-linear-gradient';

import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';


import OnboardingScreen from './component/OnboardingScreen';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import AppBar from './component/AppBar';
import Dashboard from './component/Dashboard';
import Account from './component/Account';
import ProfileDetails from './component/ProfileDetails';
import { ERContext } from './ERContext';
import UserScreen from './component/UserScreen';
import DrawerContent from './component/DrawerContent'


const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'#92B2FD',
    accent: 'yellow',
    icon:'#F594B7',
    text:'#444444',
    primaryText:'#94AEFD'
  },
};




export default class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       firstTime: false,
       isLoggedIn: true,
       isConnected:false,
    }
  }
  

  componentDidMount(){
    this.getData();
    this.updateConnection();
  }






  updateConnection =()=> {
    NetInfo.addEventListener(state => {
      this.setState({
        isConnected:state.isConnected
      })
    });
}




/**
 * to get data from localstorage
 * @param {*} key
 */

  getData = async () => {
    console.log('test');
    try {
      const value = await AsyncStorage.getItem('firstTime');
      if(value !== null) {
        console.log(value);
        this.setState({
          firstTime: !(value === 'No'),
        })
      }else{
        this.setState({firstTime:true});
      }
    } catch(e) {
      console.log(e);
    }
  }




  /**
   * to store data in localstorage
   * 
   * @param {*} key 
   * @param {*} value 
   */

  storeData = async (key,value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
        Alert.alert("Error","Something went wrong in the onboarding screen");
    }
  }



  onClickStart = ()=> {
    this.setState({firstTime:false});
  }




  changeState = (key,value) =>{
    this.setState({[key]:value});
  }


  HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
        title="Go to Details"
        onPress={() => console.log()}
      />
      </View>
    );
  }

  render(){

    const Drawer = createDrawerNavigator();

    return (
      <ERContext.Provider
      value={{
        isConnected: this.state.isConnected,
        isLoggedIn : this.state.isLoggedIn,
        changeState: this.changeState,
        }}
      >
        <PaperProvider theme={theme}>
          {this.state.firstTime ? 
            <OnboardingScreen onClickStart={this.onClickStart}/>
            :
            !this.state.isLoggedIn?
              <Account/>
              :
              <>
              <NavigationContainer>
                <Drawer.Navigator
        
                drawerContent={props=> <DrawerContent {...props} />}
                >

                  <Drawer.Screen name="Dashboard" component={UserScreen}
                  options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle:{color:'#fff'},
                    headerTintColor:'#fff',
                    headerBackground:((props)=>{
                    return <LinearGradient
                      // Background Linear Gradient
                      colors={['rgba(245,148,183,1)', 'rgba(173,127,251,1)','rgba(146,178,253,1)']}
                      style={styles.background}
                      end={{x:0.9,y:0.9}}
                    />
                    }),
                            }}
                  />
                  <Drawer.Screen name="Home" component={this.HomeScreen}
                  />
                </Drawer.Navigator>
            </NavigationContainer>
              </>
          }
        </PaperProvider>
      </ERContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background:{
    flex:1,
    position:'absolute',
    height:'100%',
    width:'100%',
},
});

AppRegistry.registerComponent(appName,() => Main)