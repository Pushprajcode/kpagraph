import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Bargraph from '../screens/graph';
import {ROUT_NAMES} from './routesnames';
import PieChartScreen from '../screens/graph/pieChart';
import PieSecond from '../screens/graph/pieSecond';

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
        <Stack.Screen name={ROUT_NAMES.PIESECOND} component={PieSecond } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
