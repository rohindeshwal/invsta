import React, {useState,useEffect} from 'react';
// import axios, * as others from 'axios';
import axios from 'axios';
import {View,Text,Image,StyleSheet,Button,StatusBar} from 'react-native';
import Doughnut from 'react-native-pie';
import {LineChart} from 'react-native-chart-kit';



function Chart_header(){
   
    const [withdrawl, setWithdrawl]= useState({
		fmcaTopAssets:[0],
	  });

    const testapi = async () => {   
		try{
          const usertest = await axios.get("https://sn9jp0i0kb.execute-api.ap-southeast-2.amazonaws.com/dev/investments/1210/investmentholdings")
		  setWithdrawl(usertest.data);
		  console.log('Success!!!');
		  console.warn(usertest);
          }catch(e){
			  console.log(e)
		  }
		}
    useEffect(() => {
        testapi();
      }, []);


	return(
		<>
      
			<LineChart
				data={{
				labels: ["January", "February", "March", "April", "May", "June"],
				datasets: [
					{
					data: [20,69,42,64,78,21]
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
					r: "9",
					strokeWidth: "5",
					stroke: "#ffa726"
				}
				}}
				bezier
				style={{
				marginVertical: 8,
				borderRadius: 16
				}}
			/>
			<View style={styles.basic}>
            <Text style={{fontSize:15}}>Contribution</Text>
            <Text style={styles.textStyle}>{withdrawl.distMethod}</Text>
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

export default Chart_header;
const styles=StyleSheet.create({
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