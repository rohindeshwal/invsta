import React, {useState,useEffect} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import axios from 'axios';

function FuncApi (){

    const [county, setCount]= useState(1);

    const [port, setPortfolio]= useState({

    fmcaTopAssets: [1],
    quarterlyPdf : [0],
    portfolios: [0],
})


    const testapi = async () => {   
        const usertest = await axios.get ("https://ec3ll8cxti.execute-api.ap-southeast-2.amazonaws.com/prod/portfolios/investment-fund?portfolio=290002"); 
        setPortfolio(usertest.data);
		}
		
        useEffect(() => {
            testapi();
    }, []);


    return(
    <View style={styles.container}>
        <Text style={{fontSize:30}}>{county}</Text>
        <Button title='Count increase' 
        color='#aabbcc'
        
        onPress={()=>{setCount(county+1)}}
        />
        <View style={styles.base}>
            <Text style={{fontSize:30}}>{port.fmcaTopAssets[0].AsAtDate}</Text>
            <Text style={{fontSize:30}}>{port.quarterlyPdf[0].portfolio}</Text> 
            <Text style={{fontSize:25}}>{port.portfolios[0].Name}</Text>
        </View>

    </View>

    ) 
}

export default FuncApi;

const styles= StyleSheet.create({
    container:{
        backgroundColor:'#665b97',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    base:{
        backgroundColor:'#aabbcc',
        flex:1,
        margin:100,
        justifyContent:'center',
        alignItems:'center',
        height:200,
        width:350
    }
})







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
	