import React, {useState,useEffect} from 'react';
import {View,Text,Image,StyleSheet,StatusBar} from 'react-native';
import Pie from 'react-native-pie';

function FuncApi (){
	const [port, setPortfolio]= useState({

	fmcaTopAssets: [1],
	quarterlyPdf : [0],
	portfolios: [0],
})


const testapi = async () => {   
	const usertest = await axios.get ("https://sn9jp0i0kb.execute-api.ap-southeast-2.amazonaws.com/dev/investments/1210/investmentholdings"); 
			setPortfolio(usertest.data);
			}

			useEffect(() => {
					testapi();
	}, []);

export default function Chart_header(){
	return(
		<>
			<Pie
					radius={100}
					innerRadius={50}
					sections={[
					{
							percentage: 10,
							color: '#707070',
					},
					{
							percentage: 20,
							color: '#707070',
					},
					{
							percentage: 30,
							color: '#707070',
					},
					{
							percentage: 40,
							color: '#707070',
					},
					]}
					strokeCap={'butt'}
			/>
	<Text 
			style={{
					fontSize:15,
					fontWeight:'600',
					marginTop:20,
					marginBottom:20}}>
			Australasian Equity Fund
	</Text>
		</>
    )
}


<View style={styles.base}>
            <Text style={{fontSize:30}}>{port.fmcaTopAssets[0].AsAtDate}</Text>
            <Text style={{fontSize:30}}>{port.quarterlyPdf[0].portfolio}</Text> 
            <Text style={{fontSize:25}}>{port.portfolios[0].Name}</Text>
        </View>