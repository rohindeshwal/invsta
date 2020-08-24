import React from 'react';
import {View,Text,Image,StyleSheet,StatusBar} from 'react-native';
import {PieChart,} from "react-native-chart-kit";
import Pie from 'react-native-pie';
import Chart_header from './Chart_header';

// const data = [
//     {
//       name: "Seoul",
//       population: 21500000,
//       color: '#707070',
//       legendFontColor: "#7F7F7F",
//       legendFontSize: 15
//     },
//   ];

export default class Header extends React.Component{
    render(){
        return(
            <View>
                <StatusBar backgroundColor = "#fff" barStyle = "dark-content"/>  
                <View style={styles.main}>
                    <View style={styles.img}>
                        <Image 
                            style={styles.imgView} 
                            source={require('../src/images/invsta.png')} />
                            <Image 
                            style={styles.imgView1} 
                            source={require('../src/images/ss2.png')} />
                    </View>
                </View>
                <View style={styles.section}>
                    <View style={styles.subSection}>
                        <Text style={{textAlign:'right',fontSize:15,paddingRight:10}}>Individual Account</Text>
                        <View style={styles.subText}>
                            <Text style={{textAlign:'center',fontSize:23,marginTop:15}}>Gorden Hardisty</Text>
                            <Text style={{fontSize:20,}}>[Invsta 624]</Text>
 
                            <Chart_header />

                        </View>
                        {/* <View style={styles.basic}>
                            <Text style={{fontSize:15}}>Contribution</Text>
                            <Text style={styles.textStyle}>$19,339,741.46</Text>
                        </View>
                        <View style={styles.basic}>
                            <Text style={{fontSize:15}}>Reinvested Distins</Text>
                            <Text style={styles.textStyle}>$0.0</Text>
                        </View>
                        <View style={styles.basic}>
                            <Text style={{fontSize:15}}>Distins</Text>
                            <Text style={styles.textStyle}>-$0.0</Text>
                        </View>
                        <View style={styles.basic}>
                            <Text style={{fontSize:15}}>Withdrawls</Text>
                            <Text style={styles.textStyle}>-$0.00</Text>
                        </View>
                        <View style={styles.basic}>
                            <Text style={{fontSize:15}}>Tax/Paid</Text>
                            <Text style={styles.textStyle}>-$0.0</Text>
                        </View>
                        <View style={styles.basic}>
                            <Text style={{fontSize:15}}>Gain/Losses</Text>
                            <Text style={styles.textStyle}>$0.0</Text>
                        </View>
                        <View style={styles.basic}>
                            <Text style={{fontSize:15}}>Value</Text>
                            <Text style={styles.textStyle}>$19,339,741.46</Text>
                        </View> */}
                    </View>
                </View>
               
            </View>
        )
    }
}

const styles=StyleSheet.create({
    main:{
        height:60,
        borderBottomWidth:2,
        borderTopWidth:1,
        marginTop:10,
        justifyContent:'center',
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
        width:40,
        height:35,   
    },
    section:{
        width:'100%',
        height:'100%',
        padding:15,
        backgroundColor:'#e0dcdc',
    },
    subSection:{
        backgroundColor:'#fff',
        height:'76%',
        padding:10,
        borderRadius:10
    },
    subText:{
        justifyContent:'center',
        alignItems:'center'
    },
    basic:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    },
    textStyle:{
        backgroundColor:'#69b8ff',
        padding:6,
        borderRadius:20,
        width:150,
        textAlign:'center'
    }
})