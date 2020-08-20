import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

function About(){
    return(
        <View>
            <View style={styles.basic}>
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
                        </View>
        </View>
    )
}