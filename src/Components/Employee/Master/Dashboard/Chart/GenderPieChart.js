import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function GenderPieChart() {
  let options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: null,
    },
    tooltip: {
      headerFormat: '',
      pointFormat:
        '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        ' <b>{point.z}</b><br/>',
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        minPointSize: 10,
        innerSize: '60%',
        zMin: 0,
        name: 'countries',
        data: [
          {
            name: 'Male',
            y: 505370,
            z: 87,
            color: '#3BA4E8',
          },
          {
            name: 'Female',
            y: 551500,
            z: 26,
            color: '#141A2A',
          },
          {
            name: 'Other',
            y: 312685,
            z: 16,
            color: '#E6EDEF',
          },
        ],
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
