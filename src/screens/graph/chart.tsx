import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {VictoryChart, VictoryBar, VictoryTheme} from 'victory-native';

export default function ChartScreen() {
  const data = [
    {quarter: 1, earnings: 300},
    {quarter: 2, earnings: 100},
    {quarter: 3, earnings: 300},
    {quarter: 4, earnings: 100},
    { quarter: 7, earnings: 50 },
    { quarter: 8, earnings: 180},
  ];
  return (
    <View>
      <VictoryChart width={350} theme={VictoryTheme.material}>
        <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart>
    </View>
  );
}

const styles = StyleSheet.create({});
