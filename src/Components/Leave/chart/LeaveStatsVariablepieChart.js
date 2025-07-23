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
            name: 'Loss Of Pay',
            y: 505370,
            z: 87,
            color: '#5C6DFE',
          },
          {
            name: 'Earned Leave',
            y: 551500,
            z: 26,
            color: '#345DC7',
          },
          {
            name: 'Sick Leave',
            y: 312685,
            z: 16,
            color: '#3BA4E8',
          },
          {
            name: 'Casual Leave',
            y: 78867,
            z: 6,
            color: '#097B82',
          },
          {
            name: 'Paternity Leave',
            y: 301340,
            z: 10,
            color: '#34C75A',
          },
          {
            name: 'Maternity Leave',
            y: 301340,
            z: 10,
            color: '#FF8F0B',
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
