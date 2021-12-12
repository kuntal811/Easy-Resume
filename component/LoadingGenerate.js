import React, { Component } from 'react'
import { Text, View ,Dimensions, ActivityIndicator } from 'react-native'

export default class LoadingGenerate extends Component {
    
    render() {
        const windowWidth = Dimensions.get('window').width;
        const windowHeight = Dimensions.get('window').height;
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center',height:windowHeight,width:windowWidth}}>
                <View>
                    <ActivityIndicator size="large" color="#AF7DFB" />
                    <Text style={{fontWeight:'bold'}}>Generating Resume</Text>
                </View>
            </View>
        )
    }
}
