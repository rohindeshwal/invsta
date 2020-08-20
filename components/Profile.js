import React from 'react';
import {View,Text,StyleSheet,Image,StatusBar} from 'react-native';

import PhotoUpload from 'react-native-photo-upload';
import ImagePicker from 'react-native-image-picker'
import * as RNFS from 'react-native-fs';

import Nav from './Nav'
import First from './First'

export default function Profile(){
    return(
        <View>
                <StatusBar backgroundColor = "#fff" barStyle = "dark-content"/>  

            {/* logo section */}
                <View style={styles.main}>
                    <View style={styles.img}>
                        <Image 
                            style={styles.imgView} 
                            source={require('../src/images/invsta.png')} />
                            <Image 
                            style={styles.imgView1} 
                            source={require('../src/images/cross.png')} />
                    </View>
                </View>


                {/* home/profile section */}

                <View style={styles.section}>
                    <Text style={styles.textStyle}>HOME/PROFILE</Text>
                </View>


            {/* profile picture section */}

                <View style={styles.content}>
                    <View style={styles.subContent}>
                        <View style={styles.subContent1}>
                            <PhotoUpload style={{
                                    }} >
                                <Image
                                    style={{
                                    width: 150,
                                    height: 150,
                                
                                    borderRadius: 50,
                                    // borderWidth:5,
                                    borderColor:'#000'
                                    }}
                                    
                                
                                    source={require('../src/images/profile.jpg')}
                                />
                            </PhotoUpload> 
                        </View> 
                        <Text style={{fontWeight:'bold'}}>SANJEEV KUMAR</Text>
                        <View style={{marginTop:40}}>
                            {/* tab navigation */}
                                   <Text><Nav /></Text> 
                                   {/* <Text><First /></Text>  */}
                        </View>
                     </View> 
                </View>
        </View>
    )
}


const styles= StyleSheet.create({
    main:{
        height:60,
        borderBottomWidth:2,
        borderTopWidth:1,
        marginTop:10,
       
        // backgroundColor:'#abcdce'
    },
    img:{
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    imgView:{
        width:130,
        height:35,   
    },
    imgView1:{
        width:35,
        height:30,   
    },
    section:{
        // justifyContent:'space-evenly',
        
    },
    textStyle:{
        backgroundColor:'#69b8ff',
        height:40,
        padding:10
    },
    content:{
        width:'100%',
        height:'100%',
        padding:20,
        // flex:1,
        backgroundColor:'#e0dcdc',
    },
    subContent:{
        backgroundColor:'#fff',
        padding:10,
        borderRadius:15,
        // flex:1,
        flexDirection:'column',
        height:'67%'

    },
    subContent1:{
      
        height:150,

    }
})
