import React from 'react';
import {CandlestickChart} from 'react-native-wagmi-charts';
import COLORS from '../../utils/colors';
import PieChart from 'react-native-pie-chart';
import {View} from 'react-native';
const series = [123, 321, 123, 789, 537];
const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800'];
const data = [
  {
    timestamp: 1625945400000,
    open: 33575.25,
    high: 33600.52,
    low: 33475.12,
    close: 33520.11,
  },
  {
    timestamp: 1625946300000,
    open: 33545.25,
    high: 33560.52,
    low: 33510.12,
    close: 33520.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
];

export default function PieSecond() {

  return (
    <View style={{flex: 1}}>
      {/* <PieChart
            widthAndHeight={350}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FFF'}
          /> */}
      <CandlestickChart.Provider data={data} children={null}>
        {/* <CandlestickChart>
    <CandlestickChart.Candles />
    <CandlestickChart.Crosshair />
  </CandlestickChart>
  <CandlestickChart.PriceText type="open" />
  <CandlestickChart.PriceText type="high" />
  <CandlestickChart.PriceText type="low" />
  <CandlestickChart.PriceText type="close" />
  <CandlestickChart.DatetimeText /> */}

        <CandlestickChart width={200} height={200} />
      
        <CandlestickChart>
          <CandlestickChart.PriceText></CandlestickChart.PriceText>
          <CandlestickChart.Candles
            positiveColor={COLORS.GREEN}

            //     renderRect={(({ x, y, width, height, fill, }: {
            //       // x: 4;
            //       // y: 40;
            //       // width: 200;
            //       // height: 300;
            //  //  fill: Color;
            //       useAnimations: boolean;
            //   }) => React.ReactNode) }
          />
        </CandlestickChart>

      </CandlestickChart.Provider>
    </View>
  );
}
