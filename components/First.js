import React from 'react';
import {View,Text,Image,StyleSheet,StatusBar,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
        title="Navigate"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
      </View>
    );
  }
  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  


const Tab = createMaterialTopTabNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{
          labelStyle: { fontSize: 10 },
          // tabStyle: { width: 100 },
          style: { backgroundColor: '#fff' },}} 
          style={{backgroundColor:'#000'}} 
          initialRoute={SettingsScreen} 
          swipeEnabled={true} tabBarPosition={"top"}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }


