import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from '../../component/custombutton';
import {LineChart} from 'react-native-gifted-charts';
import COLORS from '../../utils/colors';
import {useState} from 'react';
import { styles } from 'react-native-gifted-charts/src/BarChart/styles';
import { useNavigation } from '@react-navigation/native';
import { ROUT_NAMES } from '../../router/routesnames';

const AreaChartScreen = () => {
  const navigation=useNavigation<any>()
  const [toggle, updateToggle] = useState('1D');
  const onpress = () => {
    updateToggle('1m');
  };
  const onpressday = () => {
    updateToggle('1D');
  };

  const ptData = [
    {value: 160, date: '1 Apr 2022'},
    {value: 180, date: '2 Apr 2022'},
    {value: 190, date: '3 Apr 2022'},
    {value: 180, date: '4 Apr 2022'},
    {value: 140, date: '5 Apr 2022'},
    {value: 245, date: '6 Apr 2022'},
    {value: 160, date: '7 Apr 2022'},
    {value: 200, date: '8 Apr 2022'},

    {value: 220, date: '9 Apr 2022'},
    {
      value: 440,
      date: '10 Apr 2022',
      label: '10 Apr 2022',
      labelTextStyle: {color: 'lightgray', width: 60},
    },
    {value: 280, date: '11 Apr 2022'},
    {value: 260, date: '12 Apr 2022'},
    {value: 340, date: '13 Apr 2022'},
    {value: 385, date: '14 Apr 2022'},
    {value: 280, date: '15 Apr 2022'},
    {value: 390, date: '16 Apr 2022'},

    {value: 370, date: '17 Apr 2022'},
    {value: 285, date: '18 Apr 2022'},
    {value: 295, date: '19 Apr 2022'},
    {
      value: 300,
      date: '20 Apr 2022',
      label: '20 Apr 2022',
      labelTextStyle: {color: 'lightgray', width: 60},
    },
    {value: 280, date: '21 Apr 2022'},
    {value: 295, date: '22 Apr 2022'},
    {value: 260, date: '23 Apr 2022'},
    {value: 255, date: '24 Apr 2022'},

    {value: 190, date: '25 Apr 2022'},
    {value: 220, date: '26 Apr 2022'},
    {value: 205, date: '27 Apr 2022'},
    {value: 230, date: '28 Apr 2022'},
    {value: 210, date: '29 Apr 2022'},
    {
      value: 200,
      date: '30 Apr 2022',
      label: '30 Apr 2022',
      labelTextStyle: {color: 'lightgray', width: 60},
    },
    {value: 240, date: '1 May 2022'},
    {value: 250, date: '2 May 2022'},
    {value: 280, date: '3 May 2022'},
    {value: 250, date: '4 May 2022'},
    {value: 210, date: '5 May 2022'},
  ];
  const dayData = [
    {value: 160, hour: '1'},
    {value: 180, hour: '2'},
    {value: 190, hour: '3'},
    {value: 190, hour: '4'},
    {value: 200, hour: '5'},
  ];

  const chooseSpan = () => {
    switch (toggle) {
      case '1D':
        console.log('1D', dayData);
        return dayData;

      default:
        console.log('1m', ptData);
        return ptData;
    }
  };
  chooseSpan();

  return (
    <View
      style={{
        paddingVertical: 100,
        backgroundColor: COLORS.WHITE,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <CustomButton
          label={'1D'}
          style={{width: 100, borderRadius: 200}}
          onPress={onpressday}
        />
        <CustomButton
          label={'1m'}
          style={{width: 100, borderRadius: 200}}
          onPress={onpress}
        />
      </View>

      <LineChart
        // minValue={30}
        //    adjustToWidth={false}
        initialSpacing={40}
        scrollAnimation={true}
        areaChart
        data={ptData}
        hideDataPoints
        spacing={12}
        color="#00ff83"
        thickness={4}
        startFillColor={'#92f7c6'}
        endFillColor="rgba(20,85,81,0.01)"
        startOpacity={0.9}
        endOpacity={0.2}
       initialSpacing={0}
        noOfSections={2}
        maxValue={500}
        yAxisColor="green"
        yAxisThickness={0}
        rulesType="dotted"
        rulesColor="gray"
        yAxisTextStyle={{color: 'gray'}}
        yAxisSide="left"
        xAxisColor="grey"
        pointerConfig={{
          //   pointerStripHeight: 160,
          //   pointerStripColor: 'yellow',
          //   pointerStripWidth: 2,
          //   pointerColor: 'lightgray',
          //   radius: 6,
          //   pointerLabelWidth: 100,
          //   pointerLabelHeight: 90,
          //   activatePointersOnLongPress: true,
          //   autoAdjustPointerLabelPosition: false,
          pointerLabelComponent: items => {
            return <></>;
          },
        }}
      />
      <CustomButton style={{marginTop:50}}
      onPress={()=>{
        navigation.navigate(ROUT_NAMES.CANDLE_CHART)
      }}
      />
    </View>
  );
};

export default AreaChartScreen;

//   <View
//     style={{
//       height: 90,
//       width: 100,
//       justifyContent: 'center',
//       marginTop: -30,
//       marginLeft: 300,
//     }}
//     >
//     <Text style={{color: 'white', fontSize: 14, marginBottom:6,textAlign:'center'}}>
//       {items[0].date}
//     </Text>

//     <View style={{paddingHorizontal:14,paddingVertical:6, borderRadius:16, backgroundColor:'white'}}>
//       <Text style={{fontWeight: 'bold',textAlign:'center'}}>
//         {'$' + items[0].value + '.0'}
//       </Text>
//     </View>
//   </View>
