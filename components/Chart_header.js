import React, {useState,useEffect} from 'react';
import {View,Text,Image,StyleSheet,StatusBar} from 'react-native';
import Doughnut from 'react-native-pie';

// function FuncApi (){
// 	const [port, setPortfolio]= useState({

// 	fmcaTopAssets: [1],
// 	quarterlyPdf : [0],
// 	portfolios: [0],
// })
 

// const testapi = async () => {   
// 	const usertest = await axios.get ("https://sn9jp0i0kb.execute-api.ap-southeast-2.amazonaws.com/dev/investments/1210/investmentholdings"); 
// 			setPortfolio(usertest.data);
// 			}

// 			useEffect(() => {
// 					testapi();
// 	}, []);


export default function Chart_header(){
	return(
		<>
			<Doughnut
					radius={100}
					innerRadius={50}  
					sections={[
					{
							percentage: 30,
							color: '#abff87',
					},
					{
							percentage: 25,
							color: '#707070',
					},
					{
							percentage: 10,
							color: '#dc67ec',
					},
					{
							percentage: 35,
							color: '#69b8ff',
					},
					]}
					strokeCap={'butt'}
			/>
			
	{/* <Text 
			style={{
					fontSize:15,
					fontWeight:'600',
					marginTop:20,
					marginBottom:20}}>
			Australasian Equity Fund
	</Text> */}
	
		</>
    )
}


/* <View style={styles.base}>
            <Text style={{fontSize:30}}>{port.fmcaTopAssets[0].AsAtDate}</Text>
            <Text style={{fontSize:30}}>{port.quarterlyPdf[0].portfolio}</Text> 
            <Text style={{fontSize:25}}>{port.portfolios[0].Name}</Text>
        </View> */