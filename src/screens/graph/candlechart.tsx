
import { StyleSheet,  View } from 'react-native'
import React from 'react'
import { VictoryAxis,  VictoryCandlestick, VictoryChart, VictoryCursorContainer, VictoryLabel,VictoryScatter,VictoryTheme } from "victory-native";
import CustomButton from '../../component/custombutton';
import { useNavigation } from '@react-navigation/native';
import { ROUT_NAMES } from '../../router/routesnames';



export default function  CandleScreen() {
  const navigation=useNavigation<any>()



 const  data=[
    {x: new Date(2016, 6, 1), open:5, close: 9, high: 10, low:3},
    {x: new Date(2016, 6, 2), open: 10, close: 5, high: 10, low: 1},
    {x: new Date(2016, 6, 3), open: 2, close: 21, high: 24, low:0},
    {x: new Date(2016, 6, 4), open: 20, close: 10, high: 25, low: 7},
    {x: new Date(2016, 6, 5), open: 10, close: 8, high: 15, low: 5},
    {x: new Date(2016, 6, 7), open: 10, close: 15, high: 20, low: 5},
    {x: new Date(2016, 6, 8), open: 15, close: 20, high: 22, low: 10},
    {x: new Date(2016, 6, 9), open: 20, close: 10, high: 25, low: 7},
    {x: new Date(2016, 6, 10), open: 10, close: 8, high: 15, low: 5},
    {x: new Date(2016, 6, 11), open: 20, close: 10, high: 25, low: 7},
    {x: new Date(2016, 6, 12), open: 10, close: 15, high: 20, low: 5},
    {x: new Date(2016, 6, 13), open: 15, close: 20, high: 22, low: 10},
    {x: new Date(2016, 6, 14), open: 20, close: 10, high: 25, low: 7},
    {x: new Date(2016, 6, 15), open: 10, close: 8, high: 15, low: 5},
    {x: new Date(2016, 6, 16), open: 20, close: 10, high: 25, low: 7},
    {x: new Date(2016, 6, 17), open: 10, close: 15, high: 20, low: 5},
    {x: new Date(2016, 6, 18), open: 15, close: 20, high: 22, low: 10},
    {x: new Date(2016, 6, 19), open: 20, close: 10, high: 25, low: 7},
    {x: new Date(2016, 6, 20), open: 10, close: 8, high: 15, low: 5},
    {x: new Date(2016, 6, 21), open: 20, close: 10, high: 25, low: 7}, 
    {x: new Date(2016, 6, 22), open: 10, close: 15, high: 20, low: 5},
    {x: new Date(2016, 6, 23), open: 15, close: 20, high: 22, low: 10},
    {x: new Date(2016, 6, 24), open: 20, close: 10, high: 25, low: 7},
    {x: new Date(2016, 6, 25), open: 10, close: 8, high: 15, low: 5},
    {x: new Date(2016, 6, 26), open: 20, close: 10, high: 25, low: 7}, 
     
    

  ]
  
  return (
    <View 
    >
<VictoryChart width={420}
// theme={VictoryTheme.material}
  domainPadding={{ x:6 ,y:0}}
  theme={VictoryTheme.grayscale}

  scale={{ x: "time" }}
  height={300}
  style={{
    background: { fill: "white" }
  }}
>
<VictoryCursorContainer
      
    />
  {/* <VictoryAxis
    scale='time'
    tickFormat={(t:any) => `${t}`}
    fixLabelOverlap
    style={{ tickLabels: { padding: 16, fontSize:10 } }}/> */}
          {/* <VictoryBar data={data} x="quarter" y="earnings" /> */}
          {/* <VictoryCandlestick
  candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
  data={data}
/> */}
<VictoryCandlestick
  candleColors={{ positive:"#34eb98", negative: "#eb4334" }}
 //candleRatio={0.1}
  candleWidth={7}
   data={data}

  //  labelOrientation={{
  //   close: "left",
  //   open: "right",
  //   high: "top",
  //   low: "bottom"
  // }}
  closeLabelComponent={<VictoryLabel dy={20}
  textAnchor="middle"/>}

/>
{/* <VictoryBar
    // categories={{
    //   x: ["birds", "cats", "dogs", "fish", "frogs"]
    // }}
    data={[
      {x: "cats", y: 400},
      {x: "dogs", y: 450},
      {x: "birds", y:500 },
     
    ]}
  /> */}
  <VictoryAxis tickFormat={
    (t) => `${t.getDate()}`}/>
<VictoryAxis dependentAxis/>

        </VictoryChart>
        <CustomButton
        onPress={()=>{
          navigation.navigate(ROUT_NAMES.CHART_SCREEN)
        }}/>
       
    </View>
  )
}

const styles = StyleSheet.create({})


