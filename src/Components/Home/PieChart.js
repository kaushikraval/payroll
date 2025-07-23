import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function PieChart() {
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
            name: 'Work at Office',
            y: 505370,
            z: 87,
            color: '#3BA4E8',
          },
          {
            name: 'Work From Home',
            y: 551500,
            z: 26,
            color: '#606EEE',
          },
          {
            name: 'Late Arrival',
            y: 312685,
            z: 16,
            color: '#FFBC34',
          },
          {
            name: 'On Leave',
            y: 78867,
            z: 6,
            color: '#058959',
          },
          {
            name: 'Not Checked in',
            y: 301340,
            z: 10,
            color: '#D8D8D8',
          },
        ],
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
