import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Pressable,Modal,Share,Alert } from 'react-native'
import { withTheme, Button,Snackbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import ImageViewer from 'react-native-image-zoom-viewer';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
//import * as Permissions from 'expo-permissions'

const images = [{
    // Simplest usage.
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
 
    // width: number
    // height: number
    // Optional, if you know the image size, you can set the optimization performance
 
    // You can pass props to <Image />.
    props: {
        // headers: ...
    }
}];

class Preview extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             preview:false,
             showSnackbar:false,
             snackbarText:'',
             resumeLink:'http://www.africau.edu/images/default/sample.pdf'
        }
    }
    onShare = async () => {
        try {
          const result = await Share.share({
            message: 'Hey, I create a resume using Resume Maker, check it here '+this.state.resumeLink,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          Alert.alert(error.message);
        }
    }


    downloadFile(){
        this.setState({
            showSnackbar:true,
            snackbarText: 'Download has started'
        });

        const uri = "http://www.africau.edu/images/default/sample.pdf"
        let fileUri = FileSystem.documentDirectory + "sample.pdf";
        console.log(fileUri);
        FileSystem.downloadAsync(uri, fileUri)
        .then(({ uri }) => {
            this.saveFile(uri);
          })
          .catch(error => {
            console.error(error);
          })
    }

    saveFile = async (fileUri) => {
        try{
            MediaLibrary.requestPermissionsAsync();
            const asset = await MediaLibrary.createAssetAsync(fileUri);
            let data = await MediaLibrary.createAlbumAsync("EasyResume", asset, false);
            this.setState({
                showSnackbar:true,
                snackbarText: 'Download completed. Saved in Picture/EasyResume'
            });
        }catch(e){
            console.log('permision rejected');
        }
    }
    render() {
        const {colors} = this.props.theme;
        console.log(this.props.route.params.ResumeId);
        const {showSnackbar, snackbarText} = this.state;
        return (
            <>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Pressable
                        onPress={()=>{this.setState({preview:true})}}
                    >
                        <Image style={styles.resumeImage} resizeMode="contain" source={require('./../assets/resume.png')}/>
                    </Pressable>
                </View>
                <View style={styles.buttonContainer}>
                    <LinearGradient
                            colors={['rgba(173,127,251,1)','rgba(146,178,253,1)']}
                            end={{x:0.9,y:0.9}}
                            style={styles.btnGradient}>
                            <Button icon="arrow-down-bold-box" style={styles.button} labelStyle={styles.buttonText} mode="text" color="#ffffff" onPress={()=>{this.downloadFile()}}>
                               Download
                            </Button>
                    </LinearGradient>
                </View>
                <View style={styles.buttonContainer}>
                    <LinearGradient
                            colors={['rgba(173,127,251,1)','rgba(146,178,253,1)']}
                            end={{x:0.9,y:0.9}}
                            style={styles.btnGradient}>
                            <Button icon="share" style={styles.button} labelStyle={styles.buttonText} mode="text" color="#ffffff" onPress={this.onShare}>
                               Share Link
                            </Button>
                    </LinearGradient>
                </View>
            </View>
            <Modal visible={this.state.preview} transparent={true}>
                <ImageViewer
                imageUrls={images}
                enableSwipeDown={true}
                onSwipeDown={()=>{this.setState({preview:false})}}
                onCancel={()=>{this.setState({preview:false})}}
                loadingRender={()=><Text>Loading</Text>}
                />
            </Modal>

            <Snackbar
                visible={showSnackbar}
                onDismiss={()=>this.setState({showSnackbar:false})}
                duration={15000}
                action={{
                label: 'Undo',
                onPress: () => {
                    this.setState({showSnackbar:false})
                },
                }}>
                {snackbarText}
            </Snackbar>
            </>
        )
    }
}

export default withTheme(Preview)

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    imageContainer:{
        marginBottom:15,
    },
    resumeImage:{
        height: 400,
        borderRadius:5
    },
    buttonContainer:{
        margin:5
    },
    btnGradient:{
        borderRadius: 30,
    },
    button:{
        paddingHorizontal: 30,
        paddingVertical:5
    },
    buttonText:{
        fontSize:16
    }
})