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
    series: [
      {
        minPointSize: 10,
        innerSize: '80%',
        zMin: 0,
        name: 'countries',
        data: [
          {
            name: 'Payroll Processed Employees',
            y: 505370,
            z: 87,
            color: '#FFBC6D',
          },
          {
            name: 'Payroll Pending Employees',
            y: 551500,
            z: 26,
            color: '#3BA4E8',
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
