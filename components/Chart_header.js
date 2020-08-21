import React, {useState,useEffect} from 'react';
import {View,Text,Image,StyleSheet,StatusBar} from 'react-native';
import Doughnut from 'react-native-pie';
import {LineChart} from 'react-native-chart-kit';
import {axios} from 'axios';

// const FuncApi = () => {
// 	const [name, setName]= useState({})
// 	const [fees, setFees]= useState({})

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
			<LineChart
				data={{
				labels: ["January", "February", "March", "April", "May", "June"],
				datasets: [
					{
					data: [20,30,42,64,78,21],
					backgroundColor:[ "#e26a00",]
					}
				]
				}}
				width={320} // from react-native
				height={220}
			/>

</>
    )
}

