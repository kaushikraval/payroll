import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function LineChart() {
  let options = {
    chart: {
      type: 'area',
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
        lineWidth: 2,
        label: {
          connectorAllowed: false,
        },
      },
    },
    // tooltip: {
    //   shared: true,
    //   crosshairs: true,
    // },
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
        data: [100, 50, 150, 200, 50, 100, 100, 0, 150, 100, 50, 0],
        color: '#3BA4E8',
        showInLegend: false,
        fillColor: {
          linearGradient: {
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 1,
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, 'rgba(59, 164, 232, 0)'],
          ],
        },
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
