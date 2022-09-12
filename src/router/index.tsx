import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Bargraph from '../screens/graph';
import {ROUT_NAMES} from './routesnames';
import PieChartScreen from '../screens/graph/pieChart';
// import PieSecond from '../screens/graph/pieSecond';
import PieScreen from '../screens/graph/pieChart';
import AreaChartScreen from '../screens/graph/areachat';
import CandleScreen from '../screens/graph/candlechart';
import ChartScreen from '../screens/graph/chart';
const Stack = createNativeStackNavigator();
export default function NavigationScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenoptions={{
        headerShown:false
      }}>
        <Stack.Screen name={ROUT_NAMES.BARGRAPH} component={Bargraph} />
        <Stack.Screen name={ROUT_NAMES.PIE_GRAPH} component={PieChartScreen } />
        <Stack.Screen name={ROUT_NAMES.PIE_} component={PieScreen } />
        <Stack.Screen name={ROUT_NAMES.AREA_CHART} component={AreaChartScreen} />
        <Stack.Screen name={ROUT_NAMES.CANDLE_CHART} component={CandleScreen}/>
        <Stack.Screen name={ROUT_NAMES.CHART_SCREEN} component={ChartScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
