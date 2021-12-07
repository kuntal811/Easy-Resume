import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, ScrollView, Image } from 'react-native';
import { FAB,List, Button,HelperText, Switch,IconButton, Headline, Subheading  } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

import * as ImagePicker from 'expo-image-picker';

import ProfileImg from './../assets/profile.png';

export default class ProfileDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            profilePhoto: ProfileImg,
            resumeData:{
                profile:[],
                education:[],
                experience:[],
                projects:[],
                skills:[],
                languages:[],
                hobbies:[]
            },
            profile:{
                name:'',
                email:'',
                phone:'',
                summary:'',
                image: '',
            },
            education:{
                instituteName:'Pondicherry University',
                degreeTitle:'Masters of Computer Application',
                startYear:'2020',
                endYear:'2022',
                tillPresent:true,
                cgpa:'8.62',
                summary:'this is summary'
                },
            experience:{
                companyName:'KS Tech Pvt Limited',
                jobTitle:'Software Engineer',
                startDate:'5/2020',
                endDate:'5/2022',
                tillPresent:true,
                summary:'this is summary'
                },
            projects:{
                projectName:'KS Tech Pvt Limited',
                projectDescription:'Software Engineer',
                startDate:'5/2020',
                endDate:'5/2022',
                tillPresent:true,
                summary:'this is summary'
                },
            skills:{
                skillName:'',
                skillLevel:'',
            },
            languages:{
                languageName:'',
                /*languageLevel:'',*/
            },
            hobbies:{
                hobbyName:'',
            }
        }
    }
    componentWillUnmount(){
        // before unmounting add profile data to resumeData
        this._addSectionValue('profile','profile');
    }


    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
          base64: true
        });
    
        if (!result.cancelled) {
            //console.log(result);
          this.setState({
                profilePhoto: {uri: 'data:image/jpeg;base64,'+result.base64}
          });

          let profile = {...this.state.profile}
          profile.image = 'data:image/jpeg;base64,'+result.base64;
          this.setState({
            profile:profile
            });
        }
      }
/*
    _onChangeEducation = (fieldName,fieldValue)=>{
        //console.log(fieldName);
        var education = {...this.state.education};
        education[fieldName] = fieldValue;
        this.setState({
            education:education
        });
    }*/
    _onChangeInput = (sectionName,fieldName,fieldValue)=>{
        //let sectionName='education';
        //console.log(fieldName);
        var section = {...this.state[sectionName]};
        section[fieldName] = fieldValue;
        this.setState({
            [sectionName]:section
        });
    }
    /*
    _addEducation = ()=>{
        var edu_arr  = [...this.state.resumeData.education,this.state.education]
        var resume_data = {...this.state.resumeData};
        resume_data.education = edu_arr;
        this.setState({
            resumeData: resume_data,
        });
    }
    */
    _addSectionValue = (sectionName,stateName)=>{
        var edu_arr  = [...this.state.resumeData[sectionName],this.state[stateName]]
        var resume_data = {...this.state.resumeData};
        resume_data[sectionName] = edu_arr;
        this.setState({
            resumeData: resume_data,
        });
    }

    _onSubmit = async()=>{
        // before unmounting add profile data to resumeData
            this._addSectionValue('profile','profile');
            console.log(this.state.resumeData);
        //this.props.navigation.push('ChooseTemplate',{resumeData:this.state.resumeData});
    }
    render() {
        console.log(this.state.resumeData);
        return (
        <ScrollView>
            <List.Section title="Resume Details" style={{paddingHorizontal:15}}>

                {/*#################################  Profile Details  #####################################################*/}
                <List.Accordion
                    title="Profile Details"
                    titleStyle={styles.titleStyle}
                    left={props => <List.Icon {...props} color="#fff" icon="account" />}
                    style={styles.accordian}
                    theme={{colors:{text: '#fff'}}}
                    >
                    <View style={styles.accordianChildContainer}>

                        <View style={{flexDirection:'row', justifyContent:'center',marginTop:10}}>
                            <View>
                                <Image source={this.state.profilePhoto} style={{height:100,width:100,borderRadius:100}}></Image>
                                <View style={{position:'absolute',bottom:0,right:-5,backgroundColor:'#CCD0F6',borderRadius:30}}>
                                    <IconButton
                                        onPress={()=>this.pickImage()}
                                        style={{margin:0}}
                                        icon="camera"
                                        color="#fff"
                                    >
                                    
                                    </IconButton>
                                </View>
                            </View>
                        </View>
                        <TextInput
                            placeholder="Full Name"
                            style={styles.inputStyle}
                            value={this.state.profile.name}
                            onChangeText={(value)=>this._onChangeInput('profile','name',value)}
                            />
                        <TextInput
                            placeholder="Email"
                            style={styles.inputStyle}
                            keyboardType="email-address"
                            value={this.state.profile.email}
                            onChangeText={(value)=>this._onChangeInput('profile','email',value)}
                            />
                        <TextInput
                            placeholder="Phone"
                            style={styles.inputStyle}
                            keyboardType="numeric"
                            value={this.state.profile.phone}
                            onChangeText={(value)=>this._onChangeInput('profile','phone',value)}
                            />
                        <TextInput
                            placeholder="Summary"
                            style={[styles.inputStyle,{borderRadius:10,marginBottom:10,height:100,justifyContent:'flex-start'}]}
                            multiline={true}
                            numberOfLines={7}
                            value={this.state.profile.summary}
                            onChangeText={(value)=>this._onChangeInput('profile','summary',value)}
                            />

                    </View>
                </List.Accordion>


                {/*#################################  Education Details  #####################################################*/}
                <List.Accordion
                
                    title="Education Details"
                    titleStyle={styles.titleStyle}
                    left={props => <List.Icon {...props} color="#fff" icon="account" />}
                    style={styles.accordian}
                    theme={{colors:{text: '#fff'}}}
                    >
                    {/*    show added education data */}
                    <View style={styles.accordianChildContainer}>
                        <View style={styles.dataContainer}>
                            {
                                this.state.resumeData.education.map((data,index)=>{
                                    return <List.Item
                                                title={data.degreeTitle+','+data.instituteName}
                                                titleNumberOfLines={2}
                                                description={data.startYear+'-'+data.endYear+', CGPA:'+data.cgpa+'\n'+data.summary}
                                                right={props => <List.Icon {...props} icon="folder" />}
                                            />
                                })
                            }
                        </View>
                        <TextInput
                            name="instituteName"
                            placeholder="Institute Name"
                            style={styles.inputStyle}
                            value={this.state.education.instituteName}
                            onChangeText={(value)=>this._onChangeInput('education','instituteName',value)}
                            />
                        <TextInput
                            placeholder="Degree Title"
                            style={styles.inputStyle}
                            value={this.state.education.degreeTitle}
                            onChangeText={(value)=>this._onChangeInput('education','degreeTitle',value)}
                            />
                        <View style={styles.durationContainer}>
                            <TextInput
                                placeholder="Start Year"
                                keyboardType="numeric"
                                style={[styles.inputStyle,{width:'48%'}]}
                                value={this.state.education.startYear}
                                onChangeText={(value)=>this._onChangeInput('education','startYear',value)}
                                />
                            <TextInput
                                placeholder="End Year"
                                keyboardType="numeric"
                                style={[styles.inputStyle,{width:'48%'}]}
                                value={this.state.education.endYear}
                            onChangeText={(value)=>this._onChangeInput('education','endYear',value)}
                                />
                        </View>

                        <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
                            <Text>Till Present</Text>
                            <Switch color="#555" value={this.state.education.tillPresent} onValueChange={(value)=>this._onChangeInput('education','tillPresent',value)} />
                        </View>

                        <TextInput
                            placeholder="CGPA"
                            style={[styles.inputStyle,{marginTop:0}]}
                            value={this.state.education.cgpa}
                            onChangeText={(value)=>this._onChangeInput('education','cgpa',value)}
                            />
                        
                        <TextInput
                            placeholder="Summary"
                            style={[styles.inputStyle,{borderRadius:10,marginBottom:10,height:100,justifyContent:'flex-start'}]}
                            multiline={true}
                            numberOfLines={7}
                            value={this.state.education.summary}
                            onChangeText={(value)=>this._onChangeInput('education','summary',value)}
                            />

                        <View style={{alignItems:'center'}}>
                            <LinearGradient
                                    colors={['rgba(173,127,251,1)','rgba(146,178,253,1)']}
                                    end={{x:0.9,y:0.9}}
                                    style={[styles.buttonContainer,{marginBottom:20}]}>
                                    <Button style={styles.button} labelStyle={styles.buttonText} mode="text" color="#ffffff" onPress={()=>this._addSectionValue('education','education')}>
                                        Add More
                                    </Button>
                            </LinearGradient>
                        </View>

                    </View>
                        
                </List.Accordion>

                {/*#################################  Experience Details  #####################################################*/}
                <List.Accordion
                
                title="Experience Details"
                titleStyle={styles.titleStyle}
                left={props => <List.Icon {...props} color="#fff" icon="account" />}
                style={styles.accordian}
                theme={{colors:{text: '#fff'}}}
                >
                <View style={styles.accordianChildContainer}>

                {/*    show added experience data */}
                    <View style={styles.dataContainer}>
                        {
                            this.state.resumeData.experience.map((data,index)=>{
                                return <List.Item
                                            title={data.jobTitle+','+data.companyName}
                                            titleNumberOfLines={2}
                                            description={data.startDate+'-'+data.endDate+'\n'+data.summary}
                                            right={props => <List.Icon {...props} icon="folder" />}
                                        />
                            })
                        }
                    </View>
                    <TextInput
                        placeholder="Company Name"
                        style={styles.inputStyle}
                        value={this.state.experience.companyName}
                        onChangeText={(value)=>this._onChangeInput('experience','companyName',value)}
                        />
                    <TextInput
                        placeholder="Job Title"
                        style={styles.inputStyle}
                        value={this.state.experience.jobTitle}
                        onChangeText={(value)=>this._onChangeInput('experience','companyName',value)}
                        />
                    <View style={styles.durationContainer}>
                        <TextInput
                            placeholder="Start Date"
                            keyboardType="numeric"
                            style={[styles.inputStyle,{width:'48%'}]}
                            value={this.state.experience.startDate}
                            startDateonChangeText={(value)=>this._onChangeInput('experience','startDate',value)}
                        />
                        <TextInput
                            placeholder="End Date"
                            keyboardType="numeric"
                            style={[styles.inputStyle,{width:'48%'}]}
                            value={this.state.experience.endDate}
                            onChangeText={(value)=>this._onChangeInput('experience','endDate',value)}
                        />
                    </View>

                    <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
                        <Text>Till Present</Text>
                        <Switch color="#555" value={this.state.experience.tillPresent} onValueChange={(value)=>{this._onChangeInput('experience','tillPresnet',value)}} />
                    </View>
                    
                    <TextInput
                        placeholder="Summary"
                        style={[styles.inputStyle,{borderRadius:10,marginBottom:10,height:100,justifyContent:'flex-start'}]}
                        multiline={true}
                        numberOfLines={7}
                        value={this.state.experience.summary}
                        onChangeText={(value)=>this._onChangeInput('experience','summary',value)}
                        />

                    <View style={{alignItems:'center'}}>
                        <LinearGradient
                                colors={['rgba(173,127,251,1)','rgba(146,178,253,1)']}
                                end={{x:0.9,y:0.9}}
                                style={[styles.buttonContainer,{marginBottom:20}]}>
                                <Button style={styles.button} labelStyle={styles.buttonText} mode="text" color="#ffffff" onPress={()=>this._addSectionValue('experience','experience')}>
                                    Add More
                                </Button>
                        </LinearGradient>
                    </View>

                </View>
            </List.Accordion>


            {/*#################################  Project Details  #####################################################*/}
            <List.Accordion
                
                title="Project Details"
                titleStyle={styles.titleStyle}
                left={props => <List.Icon {...props} color="#fff" icon="account" />}
                style={styles.accordian}
                theme={{colors:{text: '#fff'}}}
                >
                <View style={styles.accordianChildContainer}>

                {/*    show added projects data */}
                    <View style={styles.dataContainer}>
                        {
                            this.state.resumeData.projects.map((data,index)=>{
                                return <List.Item
                                            title={data.projectName}
                                            titleNumberOfLines={2}
                                            description={data.projectDescription+'\n'+data.startDate+'-'+data.endDate+'\n'+data.summary}
                                            right={props => <List.Icon {...props} icon="folder" />}
                                        />
                            })
                        }
                    </View>
                    <TextInput
                        placeholder="Project Name"
                        style={styles.inputStyle}
                        value={this.state.projects.projectName}
                        onChangeText={(value)=>this._onChangeInput('projects','projectName',value)}
                        />
                    <TextInput
                        placeholder="Project Description"
                        style={styles.inputStyle}
                        value={this.state.projects.projectDescription}
                        onChangeText={(value)=>this._onChangeInput('projects','projectDescription',value)}
                        />
                    <View style={styles.durationContainer}>
                        <TextInput
                            placeholder="Start Date"
                            keyboardType="numeric"
                            style={[styles.inputStyle,{width:'48%'}]}
                            value={this.state.projects.startDate}
                            onChangeText={(value)=>this._onChangeInput('projects','startDate',value)}
                            />
                        <TextInput
                            placeholder="End Date"
                            keyboardType="numeric"
                            style={[styles.inputStyle,{width:'48%'}]}
                            value={this.state.projects.endDate}
                            onChangeText={(value)=>this._onChangeInput('projects','endDate',value)}
                            />
                    </View>

                    <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
                        <Text>Till Present</Text>
                        <Switch color="#555" value={this.state.projects.tillPresent} onValueChange={(value)=>{this._onChangeInput('projects','tillPresnet',value)}} />
                    </View>
                    
                    <TextInput
                        placeholder="Summary"
                        style={[styles.inputStyle,{borderRadius:10,marginBottom:10,height:100,justifyContent:'flex-start'}]}
                        multiline={true}
                        numberOfLines={7}
                        value={this.state.projects.summary}
                        onChangeText={(value)=>this._onChangeInput('projects','summary',value)}
                        />

                    <View style={{alignItems:'center'}}>
                        <LinearGradient
                                colors={['rgba(173,127,251,1)','rgba(146,178,253,1)']}
                                end={{x:0.9,y:0.9}}
                                style={[styles.buttonContainer,{marginBottom:20}]}>
                                <Button style={styles.button} labelStyle={styles.buttonText} mode="text" color="#ffffff" onPress={()=>this._addSectionValue('projects','projects')}>
                                    Add More
                                </Button>
                        </LinearGradient>
                    </View>

                </View>
            </List.Accordion>

            {/*#################################  Skill Details  #####################################################*/}
            <List.Accordion
                
                title="Skill Details"
                titleStyle={styles.titleStyle}
                left={props => <List.Icon {...props} color="#fff" icon="account" />}
                style={styles.accordian}
                theme={{colors:{text: '#fff'}}}
                >
                <View style={styles.accordianChildContainer}>

                {/*    show added skills data */}
                    <View style={styles.dataContainer}>
                        {
                            this.state.resumeData.skills.map((data,index)=>{
                                return <List.Item
                                            key={index}
                                            title={data.skillName}
                                            titleNumberOfLines={2}
                                            description={data.skillLevel}
                                            right={props => <List.Icon {...props} icon="folder" />}
                                        />
                            })
                        }
                    </View>
                    <TextInput
                        placeholder="Skill Name"
                        style={styles.inputStyle}
                        value={this.state.skills.skillName}
                        onChangeText={(value)=>this._onChangeInput('skills','skillName',value)}
                        />
                    <TextInput
                        placeholder="Skill Level"
                        style={styles.inputStyle}
                        value={this.state.skills.skillLevel}
                        onChangeText={(value)=>this._onChangeInput('skills','skillLevel',value)}
                        />
                    <View style={{alignItems:'center',marginTop:10}}>
                        <LinearGradient
                            colors={['rgba(173,127,251,1)','rgba(146,178,253,1)']}
                            end={{x:0.9,y:0.9}}
                            style={[styles.buttonContainer,{marginBottom:20}]}>
                                <Button style={styles.button} labelStyle={styles.buttonText} mode="text" color="#ffffff" onPress={()=>this._addSectionValue('skills','skills')}>
                                    Add More
                                </Button>
                        </LinearGradient>
                </View>

                </View>
            </List.Accordion>

            {/*#################################  Hobby Details  #####################################################*/}
            <List.Accordion
                
                title="Hobby Details"
                titleStyle={styles.titleStyle}
                left={props => <List.Icon {...props} color="#fff" icon="account" />}
                style={styles.accordian}
                theme={{colors:{text: '#fff'}}}
                >
                <View style={styles.accordianChildContainer}>


                {/*    show added hobbies data */}
                    <View style={styles.dataContainer}>
                        {
                            this.state.resumeData.hobbies.map((data,index)=>{
                                return <List.Item
                                            key={index}
                                            title={data.hobbyName}
                                            titleNumberOfLines={2}
                                            right={props => <List.Icon {...props} icon="folder" />}
                                        />
                            })
                        }
                    </View>
                    <TextInput
                        placeholder="Hobby Name"
                        style={styles.inputStyle}
                        value={this.state.hobbies.hobbyName}
                        onChangeText={(value)=>this._onChangeInput('hobbies','hobbyName',value)}
                        />
                    <View style={{alignItems:'center',marginTop:10}}>
                        <LinearGradient
                            colors={['rgba(173,127,251,1)','rgba(146,178,253,1)']}
                            end={{x:0.9,y:0.9}}
                            style={[styles.buttonContainer,{marginBottom:20}]}>
                                <Button style={styles.button} labelStyle={styles.buttonText} mode="text" color="#ffffff" onPress={()=>this._addSectionValue('hobbies','hobbies')}>
                                    Add More
                                </Button>
                        </LinearGradient>
                    </View>

                </View>
            </List.Accordion>

            {/*#################################  Language Details  #####################################################*/}
            <List.Accordion
                
                title="Language Details"
                titleStyle={styles.titleStyle}
                left={props => <List.Icon {...props} color="#fff" icon="account" />}
                style={styles.accordian}
                theme={{colors:{text: '#fff'}}}
                >
                <View style={styles.accordianChildContainer}>

                    {/*    show added languages data */}
                    <View style={styles.dataContainer}>
                        {
                            this.state.resumeData.languages.map((data,index)=>{
                                return <List.Item
                                            key={index}
                                            title={data.languageName}
                                            titleNumberOfLines={2}
                                            right={props => <List.Icon {...props} icon="folder" />}
                                        />
                            })
                        }
                    </View>
                    <TextInput
                        placeholder="Language Name"
                        style={styles.inputStyle}
                        value={this.state.languages.languageName}
                        onChangeText={(value)=>this._onChangeInput('languages','languageName',value)}
                        />
                        {/*
                    <TextInput
                        placeholder="Level"
                        style={styles.inputStyle}
                        />
                        */}
                    <View style={{alignItems:'center',marginTop:10}}>
                        <LinearGradient
                            colors={['rgba(173,127,251,1)','rgba(146,178,253,1)']}
                            end={{x:0.9,y:0.9}}
                            style={[styles.buttonContainer,{marginBottom:20}]}>
                                <Button style={styles.button} labelStyle={styles.buttonText} mode="text" color="#ffffff" onPress={()=>this._addSectionValue('languages','languages')}>
                                    Add More
                                </Button>
                        </LinearGradient>
                    </View>

                </View>
            </List.Accordion>
            </List.Section>

            <View style={{marginTop:10}}>
                <LinearGradient
                    colors={['rgba(173,127,251,1)','rgba(146,178,253,1)']}
                    end={{x:0.9,y:0.9}}
                    >
                        <Button style={styles.nextButton} labelStyle={styles.nextButtonText} mode="text" color="#ffffff" onPress={this._onSubmit}>
                            Next
                        </Button>
                </LinearGradient>
            </View>

        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
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