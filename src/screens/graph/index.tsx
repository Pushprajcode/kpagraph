import {StyleSheet, Text, View,} from 'react-native';
import React from 'react';
import {PieChart} from 'react-native-gifted-charts';
import CustomButton from '../../component/custombutton';
import {useNavigation} from '@react-navigation/native';
import {ROUT_NAMES} from '../../router/routesnames';

const Bargraph = () => {
  const navigation = useNavigation<any>();
  const renderLegend = (text: any, color: any) => {
    return (
      <View style={styles.bottomView}>
        <View
          style={{
            height: 18,
            width: 18,
            marginRight: 10,
            borderRadius: 40,
            backgroundColor: color || 'white',
          }}
        />
        <Text style={styles.bottomText}>{text || ''}</Text>
      </View>
    );
  };

  return (
    <View style={styles.mainView}>
      <PieChart
        strokeColor="white"
        strokeWidth={2}
        donut={true}
        data={[
          {
            value: 67,
            color: '#67b7dd',
            text: '67.13%',
            shiftTextX: -15,
            shiftTextY: -20,
          },
          {value: 20, color: '#6694dc', text: '20.13%'},
          {value: 5, color: '#c767dc', text: '4.81%', shiftTextX: -10},
          {value: 7, color: '#8167dc', text: '7.93%', shiftTextX: -10},
        ]}
        showValuesAsLabels={true}
        showText={true}
        textColor="black"
        textSize={8}
        fontWeight={'bold'}
        centerLabelComponent={() => {
          return (
            <View>
              <Text style={styles.innerCircleTxt}>{'Dec-21'}</Text>
            </View>
          );
        }}
      />

      <View style={styles.bottomItem}>
        {renderLegend('Promoters', '#67b7dd')}
        {renderLegend('FII', '#6694dc')}
        {renderLegend('DII', '#c767dc')}
        {renderLegend('Others', '#8167dc')}
      </View>
      <CustomButton
      label={'areachart'}
        onPress={() => {
          navigation.navigate(ROUT_NAMES.AREA_CHART);
        }}
      />
    </View>
  );
};

export default Bargraph;

const styles = StyleSheet.create({
  bottomView: {
    flexDirection: 'row',
  },
  bottomText: {
    color: 'black',
    fontSize: 16,
  },
  mainView: {
    marginVertical: 100,
    alignItems: 'center',
  },
  innerCircleTxt: {color: 'grey', fontSize: 20},
  bottomItem: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
});
