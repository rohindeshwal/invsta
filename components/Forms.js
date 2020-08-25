import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


// const data = { username: 'example' };

//     fetch('https://example.com/profile', {
//         method: 'POST', 
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//         })
//         .then(response => response.json())
//         .then(data => {
//         console.log('Success:', data);
//         })
//         .catch((error) => {
//         console.error('Error:', error);
//     });


onClickListener = (viewId) => {
    // Alert.alert(this.state.Usrname+" "+this.state.email+" "+this.state.password , "View_id "+viewId);
    if(this.state.Usrname || this.state.Usrname != " "){
     if(this.state.email){
      if(this.state.password){
          this.registerCall();
       }else{
      Alert.alert("Please enter email");
     }
     }else{
    Alert.alert("Please enter email");
    }
  }else{
Alert.alert("Please enter username");
}
}



function Forms() {
    return(
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.textStyle}>Enter Username</Text>
                <TextInput style={styles.textInput} placeholder="Enter Username"></TextInput>
                <Text style={styles.textStyle}>Enter your Email</Text>
                <TextInput style={styles.textInput} placeholder="Enter Email"></TextInput>
                <Text style={styles.textStyle}>Enter your password</Text>
                <TextInput style={styles.textInput} placeholder="Enter Password"></TextInput>
                <TouchableOpacity style={styles.button} onPress={() => this.onClickListener('sign_up')}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Forms;

const styles= StyleSheet.create({
    container:{
        // flex:1,
        backgroundColor:'#cddcfa',
        justifyContent:'center',
        alignItems:'center',
        width:'100%', 
        height:'100%'
    },
    main:{
        // justifyContent:'center',
        // backgroundColor:'#abffcd',
        width:'60%',
        height:300
        
    },
    textStyle:{
        fontSize:25
    },
    textInput:{
        borderBottomWidth:1
    },
    button: {
        alignItems: "center",
        backgroundColor: "#7Ccf7f",
        padding: 10,
        marginTop:20,
        width:'50%',
        alignSelf:'center'
      },
})