// import {StyleSheet, Text, View, Dimensions} from 'react-native';
// import React from 'react';
// import {PieChart} from 'react-native-chart-kit';
// import COLORS from '../../utils/colors';
// import CustomButton from '../../component/custombutton';
// import STRINGS from '../../utils/strings';
// import { useNavigation } from '@react-navigation/native';
// import { ROUT_NAMES } from '../../router/routesnames';

// export default function PieChartScreen() {
//   const navigation=useNavigation<any>()
//   const chartConfig = {
//     backgroundGradientFrom: '#1E2923',
//     backgroundGradientFromOpacity: 0,
//     backgroundGradientTo: '#08130D',
//     backgroundGradientToOpacity: 0.5,
//     color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
//     strokeWidth: 2,
//     barPercentage: 0.5,
//     useShadowColorFromDataset: false,

//   };

//   const data = [
//     {
//       name: 'Seoul',
//       population: 21500000,
//       color: 'rgba(131, 167, 234, 1)',
//       legendFontColor: '#7F7F7F',
//       legendFontSize: 15,
//     },
//     {
//       name: 'Toronto',
//       population: 2800000,
//       color: '#F00',
//       legendFontColor: '#7F7F7F',
//       legendFontSize: 15,
//     },
//     {
//       name: 'Beijing',
//       population: 527612,
//       color: 'red',
//       legendFontColor: '#7F7F7F',
//       legendFontSize: 15,
//     },
//     {
//       name: 'New York',
//       population: 8538000,
//       color: '#000',
//       legendFontColor: '#7F7F7F',
//       legendFontSize: 15,
//     },
//     {
//       name: 'Moscow',
//       population: 11920000,
//       color: 'rgb(0, 0, 255)',
//       legendFontColor: '#7F7F7F',
//       legendFontSize: 15,
//     },
//   ];
//   return (
//     <View>
//     <PieChart
//       data={data}
//       height={220}
//       width={Dimensions.get('window').width}
//       accessor={'population'}
//       backgroundColor={COLORS.WHITE}
//       paddingLeft={'4'}
//       chartConfig={chartConfig}
//       center={[10, 10]}
//       // accessor={}
      
//     />
//     <View style={{height:80,width:80,borderWidth:0,backgroundColor:'white',borderRadius:50,position:'absolute',top:79,left:75}}>
//     {/* <Text>ertyuio</Text> */}
//     </View>
//     <CustomButton label={STRINGS.PIE_CHART}
//     onPress={()=>{
//       navigation.navigate(ROUT_NAMES.PIESECOND)

//     }}/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({});
import { View, Text } from 'react-native'
import React from 'react'
import { PieChart } from "react-native-gifted-charts";
import CustomButton from '../../component/custombutton';
import { useNavigation } from '@react-navigation/native';
import { ROUT_NAMES } from '../../router/routesnames';

const PieChartScreen = () => {
  const navigation=useNavigation<any>()
  const renderLegend = (text, color) => {
      return (
        <View style={{flexDirection: 'row', marginBottom: 12}}>
          <View
            style={{
              height: 18,
              width: 18,
              marginRight: 10,
              borderRadius: 4,
              backgroundColor: color || 'white',
            }}
          />
          <Text style={{color: 'black', fontSize: 16}}>{text || ''}</Text>
        </View>
      );
    };
  
    return (
      <View>
        <View
          style={{
            marginVertical: 100,
            marginHorizontal: 30,
            borderRadius: 10,
            paddingVertical: 50,

            justifyContent: 'center',
            alignItems: 'center',
          }}>



         
          <PieChart
            strokeColor="white"
            strokeWidth={4}
            donut
            data={[
              {value: 30, color: 'rgb(84,219,234)'},
              {value: 40, color: 'lightgreen'},
              {value: 20, color: 'orange'},
            ]}
            innerCircleColor="#414141"
            innerCircleBorderWidth={4}
            innerCircleBorderColor={'white'}
            showValuesAsLabels={true}
            showText
            textSize={18}
            showTextBackground={true}
            centerLabelComponent={() => {
              return (
                <View>
                  <Text style={{color: 'white', fontSize: 36}}>90</Text>
                  <Text style={{color: 'white', fontSize: 18}}>Total</Text>
                </View>
              );
            }}
          />



          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 20,
            }}>
            {renderLegend('Jan', 'rgb(84,219,234)')}
            {renderLegend('Feb', 'lightgreen')}
            {renderLegend('Mar', 'orange')}
          </View>


          
        </View>
        <CustomButton label={'areachart'}
        onPress={()=>{
          navigation.navigate(ROUT_NAMES.AREA_CHART)
          
        }}/>
      </View>
  );
}

export default PieChartScreen;