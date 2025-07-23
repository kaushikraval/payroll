import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function LineChart() {
  let options = {
    chart: {
      type: 'spline',
    },
    title: {
      text: null,
    },
    legend: {
      align: 'center',
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      series: {
        lineWidth: 5,
        label: {
          connectorAllowed: false,
        },
      },
    },
    tooltip: {
      shared: true,
      crosshairs: true,
    },
    xAxis: {
      categories: [
        'Jan 2022',
        'Feb 2022',
        'Mar 2022',
        'Apr 2022',
        'May 2022',
        'Jun 2022',
        'Jul 2022',
        'Aug 2022',
        'Sep 2022',
        'Oct 2022',
        'Nov 2022',
        'Dec 2022',
      ],
    },
    series: [
      {
        name: 'Earnings',
        data: [10, 30, 40, 60, 15, 8, 25, 10, 30, 40, 60, 15],
        color: '#606EEE',
      },
      {
        name: 'Deductions',
        data: [20, 10, 25, 10, 15, 25, 10, 20, 10, 25, 10, 15],
        color: '#FFBC6D',
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          // chartOptions: {
          //   legend: {
          //     layout: 'horizontal',
          //     align: 'center',
          //     verticalAlign: 'bottom',
          //   },
          // },
        },
      ],
    },
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
