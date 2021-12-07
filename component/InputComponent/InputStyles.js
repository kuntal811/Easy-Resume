import {StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
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