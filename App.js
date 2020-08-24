import React from 'react';
import {View,} from 'react-native';
import Header from './components/Header';
import Profile from './components/Profile';
import Nav from './components/Nav'
import First from './components/First'
import High from './components/High';

export default class App extends React.Component{
  render(){
    return(
      <View>
        <Header />
        {/* <Profile /> */}
        {/* <First /> */}
        {/* <High /> */}
      </View>
    )
  }
}
