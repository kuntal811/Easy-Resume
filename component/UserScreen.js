import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './Dashboard';
import ProfileDetails from './ProfileDetails';
import ChooseTemplate from './ChooseTemplate';
import Preview from './Preview';
import { ResumeDataContext } from '../ERContext';

export default class UserScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            resumeData:{
                profile:[],
                education:[],
                experience:[],
                projects:[],
                skills:[],
                languages:[],
                hobbies:[],
                custom:[],
            },
        }
    }

    changeState = (key,value) =>{
        this.setState({[key]:value});
      }
    
    render() {
        const Stack = createStackNavigator();
        return (
            <ResumeDataContext.Provider
                value={{
                    state:this.state,
                    changeState: this.changeState,
                    }}>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                    headerMode: 'screen',
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'tomato' },
                    }}
                >
                    <Stack.Screen
                    name="Home"
                    component={Dashboard}
                    options={{
                        headerShown:false,
                    }}
                    />
                    <Stack.Screen
                    name="Profile"
                    component={ProfileDetails}
                    options={{
                        headerShown:false,
                    }}
                    />
                    <Stack.Screen
                        name="ChooseTemplate"
                        component={ChooseTemplate}
                        options={{
                            headerShown:false,
                        }}
                    />
                    <Stack.Screen
                        name="Preview"
                        component={Preview}
                        options={{
                            headerShown:false,
                        }}
                    />
            </Stack.Navigator>
          </ResumeDataContext.Provider>
        )
    }
}
