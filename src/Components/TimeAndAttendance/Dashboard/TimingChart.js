import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

export default function TimingChart() {
  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: null,
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: ['1', '2', '3', '4', '5'],
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Assists',
      },
    },
    tooltip: {
      pointFormat:
        '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      shared: true,
    },
    plotOptions: {
      column: {
        stacking: 'percent',
      },
    },
    series: [
      {
        name: 'Before',
        data: [4, 4, 2, 4, 4],
        color: '#89C8F1',
      },
      {
        name: 'Break',
        data: [0, 4, 3, 2, 3],
        color: '#FFBC6D',
      },
      {
        name: 'After',
        data: [1, 2, 2, 1, 2],
        color: '#89C8F1',
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
