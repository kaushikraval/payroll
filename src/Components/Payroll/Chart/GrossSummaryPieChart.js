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
        // size: 300,
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      itemMarginTop: 10,
      itemMarginBottom: 10,
    },
    series: [
      {
        minPointSize: 10,
        innerSize: '80%',
        zMin: 0,
        name: 'countries',
        data: [
          {
            name: 'Basic',
            y: 505370,
            z: 87,
            color: '#FFBC6D',
          },
          {
            name: 'HRA',
            y: 551500,
            z: 26,
            color: '#0DA0A9',
          },
          {
            name: 'Special Allowance',
            y: 551500,
            z: 26,
            color: '#FF9F38',
          },
          {
            name: 'Conveyance Allowance',
            y: 551500,
            z: 26,
            color: '#E6ACEB',
          },
          {
            name: 'Travel Allowance',
            y: 551500,
            z: 26,
            color: '#57CE55',
          },
          {
            name: 'Washing Allowance',
            y: 551500,
            z: 26,
            color: '#3BA4E8',
          },
          {
            name: 'Overtime',
            y: 551500,
            z: 26,
            color: '#606EEE',
          },
          {
            name: 'Bonus',
            y: 551500,
            z: 26,
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
