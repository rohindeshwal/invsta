import  React from 'react';
import { View, Text,StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap ,TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
  <>
  <View style={[styles.scene, {  }]} />
  <View style={styles.basic}>
        <Text style={{fontSize:15}}>Account Id:</Text>
        {/* <Text style={styles.textStyle}>28077</Text> */}
      </View>
      <View style={styles.basic}>
        <Text style={{fontSize:15}}>Name:</Text>
        {/* <Text style={styles.textStyle}>$0.0</Text> */}
      </View>
      <View style={styles.basic}>
        <Text style={{fontSize:15}}>Preffered Name:</Text>
        {/* <Text style={styles.textStyle}>-$0.0</Text> */}
      </View>
      <View style={styles.basic}>
        <Text style={{fontSize:15}}>Email:</Text>
        {/* <Text style={styles.textStyle}>-$0.00</Text> */}
      </View>
      <View style={styles.basic}>
        <Text style={{fontSize:15}}>Mobile Number:</Text>
        {/* <Text style={styles.textStyle}>-$0.0</Text> */}
      </View>
      <View style={styles.basic}>
        <Text style={{fontSize:15}}>Date of Birth:</Text>
        {/* <Text style={styles.textStyle}>$0.0</Text> */}
      </View>
      <View style={styles.basic}>
        <Text style={{fontSize:15}}>PIR Rate:</Text>
        {/* <Text style={styles.textStyle}>$19,339,741.46</Text> */}
      </View>
      <View style={styles.basic}>
        <Text style={{fontSize:15}}>Advisor Name:</Text>
        {/* <Text style={styles.textStyle}>$19,339,741.46</Text> */}
      </View>
      <View style={styles.basic}>
        <Text style={{fontSize:15}}>Company Name:</Text>
                            {/* <Text style={styles.textStyle}>$19,339,741.46</Text> */}
                        </View>

                        
  </>
);

const SecondRoute = () => (
  <View style={[styles.scene1, {  }]} />
);
const ThirdRoute = () => (
  <View style={[styles.scene, {  }]} />
);

const initialLayout = { width: 122, backgroundColor: '#fff' };

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'first', title: 'About' },
    { key: 'second', title: 'Address' },
    { key: 'third', title: 'Bank Details' },
  ]);

  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });


  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#000' }}
      style={{ backgroundColor: '#67a5ed',activeColor:'#fff' }}
      
    />
  );


  return (
    <>
    <View style={{backgroundColor:'#cdf56d'}} >
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      // initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    flexDirection:'row',
    backgroundColor:'#cdf56d'
  },
  scene1: {
    flex: 1,
    flexDirection:'row',
    backgroundColor:'#fc45cd',
    width: Dimensions.get('window').width
  },
  scene2: {
    flex: 1,
    flexDirection:'row',
    backgroundColor:'#b24dc8',
    width: Dimensions.get('window').width
  },
  basic:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10
},
textStyle:{

    width:50,
    textAlign:'center'
}
});






// import 'react-native-gesture-handler';
// import React from 'react';
// import {View,Text,Button,StyleSheet, ImageBackground} from 'react-native'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// function About({ navigation }) {
//   return (
//     <View>
//       <Text>About</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function Address({ navigation }) {
//   return (
//     <View>
//       <Text>Address</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function BankDetails() {
//   return (
//     <View>
//       <Text>Details!</Text>
//     </View>
//   );
// }


// const AboutStack = createStackNavigator();

// function AboutStackScreen() {
//   return (
//     <AboutStack.Navigator>
//       <AboutStack.Screen name="About" component={About} />
//       <AboutStack.Screen name="Details" component={BankDetails} />
//     </AboutStack.Navigator>
//   );
// }

// const AddressStack = createStackNavigator();

// function AddressStackScreen() {
//   return (
//     <AddressStack.Navigator>
//       <AddressStack.Screen name="Address" component={Address} />
//       <AddressStack.Screen name="Details" component={BankDetails} />
//     </AddressStack.Navigator>
//   );
// }

// const DetailsStack = createStackNavigator();

// function DetailsStackScreen() {
//   return (
//     <DetailsStack.Navigator >
//       <DetailsStack.Screen name="BankDetails" component={BankDetails} />
//       <DetailsStack.Screen name="Details" component={BankDetails} />
//     </DetailsStack.Navigator>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function Nav() {
//   return (
//       <NavigationContainer>
//         <Tab.Navigator>
//           <Tab.Screen name="About" component={AboutStackScreen} />
//           <Tab.Screen name="Address" component={AddressStackScreen} />
//           <Tab.Screen name="Bank Details" component={DetailsStackScreen} />
//         </Tab.Navigator>
//       </NavigationContainer>
//   );
// }
