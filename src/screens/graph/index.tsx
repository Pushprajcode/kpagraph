import {Text, View, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import { BarChart} from 'react-native-chart-kit';
import CustomButton from '../../component/custombutton';
import STRINGS from '../../utils/strings';
import { useNavigation } from '@react-navigation/native';
import { ROUT_NAMES } from '../../router/routesnames';


export default function Bargraph() {
  const navigation = useNavigation<any>();

  const  data={
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'july',
    ],
    datasets: [
      {
        data: [10, 20, 30, 40, 50, 60, 70],
      },
    ],
  }
  return (
    <View>
      <Text>Bar chart</Text>
      <BarChart
        data={data}
        width={Dimensions.get('window').width}
        height={280}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={10} 
        
        chartConfig={{
          backgroundColor: '#e26a00',
          // backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: '#ffa726',
          // decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <CustomButton label={STRINGS.PIE_CHART}
      style={styles.buttonText}
      onPress={()=>{
      navigation.navigate(ROUT_NAMES.PIE_GRAPH)
        
      }}/>

    </View>
  );
}

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};
const styles = StyleSheet.create({
  buttonText:{
    
    
  }
});
