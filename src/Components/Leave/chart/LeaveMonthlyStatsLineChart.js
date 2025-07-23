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
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    series: [
      {
        name: 'Paid',
        data: [10, 30, 40, 60, 15, 8, 25, 10, 30, 40, 60, 15],
        color: '#D575DD',
        showInLegend: false,
      },
      {
        name: 'Unpaid',
        data: [20, 10, 25, 10, 15, 25, 10, 20, 10, 25, 10, 15],
        color: '#606EEE',
        showInLegend: false,
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
