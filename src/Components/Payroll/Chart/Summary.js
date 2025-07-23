import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function Summary() {
  let options = {
    chart: {
      type: 'pie',
      height: 93,
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
        size: 90,
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    legend: {
      layout: 'horizontal',
      align: 'right',
      verticalAlign: 'middle',
      itemMarginTop: 10,
      itemMarginBottom: 10,
    },
    series: [
      {
        minPointSize: 1,
        innerSize: '70%',
        zMin: 0,
        name: 'countries',
        data: [
          {
            name: 'Pending Loan Request',
            y: 505370,
            z: 87,
            color: '#FFBC34',
          },
          {
            name: 'Running Loan',
            y: 551500,
            z: 26,
            color: '#FF8F0B',
          },
          {
            name: 'Approved Loan',
            y: 551500,
            z: 26,
            color: '#0DA0A9',
          },
          {
            name: 'Completed Loan',
            y: 551500,
            z: 26,
            color: '#D575DD',
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
