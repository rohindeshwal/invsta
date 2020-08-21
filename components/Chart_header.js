import React, {useState,useEffect} from 'react';
import {View,Text,Image,StyleSheet,StatusBar} from 'react-native';
import Doughnut from 'react-native-pie';
import {LineChart} from 'react-native-chart-kit';


function FuncApi (){
	const [name, setName]= useState({})
	const [fees, setFees]= useState({})
}


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
					data: [20,30,42,64,78,21]
					}
				]
				}}
				width={380} // from react-native
				height={220}
				yAxisLabel="$"
				yAxisSuffix="k"
				yAxisInterval={1} // optional, defaults to 1
				chartConfig={{
				backgroundColor: "#707070",
				backgroundGradientFrom: "#707070",
				backgroundGradientTo: "#707070",
				decimalPlaces: 2, // optional, defaults to 2dp
				color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
				labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
				style: {
					borderRadius: 16
				},
				propsForDots: {
					r: "6",
					strokeWidth: "2",
					stroke: "#ffa726"
				}
				}}
				bezier
				style={{
				marginVertical: 8,
				borderRadius: 16
				}}
			/>


			{/* <Doughnut
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
			/> */}
			
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
