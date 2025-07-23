import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import solidGauge from 'highcharts/modules/solid-gauge.js';
import highchartsMore from 'highcharts/highcharts-more.js';

export default function PaternityLeaveGaugesChart() {
  highchartsMore(Highcharts);
  solidGauge(Highcharts);

  const options = {
    chart: {
      type: 'solidgauge',
      height: '110%',
    },

    title: {
      text: null,
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      borderWidth: 0,
      backgroundColor: 'none',
      shadow: false,
      style: {
        fontSize: '40px',
      },
      valueSuffix: 'Days',
      pointFormat:
        '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
      positioner: function (labelWidth) {
        return {
          x: (this.chart.chartWidth - labelWidth) / 2,
          y: this.chart.plotHeight / 2 + 15,
        };
      },
    },

    pane: {
      startAngle: 0,
      endAngle: 360,
      background: [
        {
          // Track for Move
          outerRadius: '110%',
          innerRadius: '88%',
          backgroundColor: '#D6F4DE',
          borderWidth: 0,
        },
      ],
    },

    yAxis: {
      min: 0,
      max: 110,
      lineWidth: 0,
      tickPositions: [],
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: false,
        },
        linecap: 'round',
        stickyTracking: false,
        rounded: true,
      },
    },

    series: [
      {
        name: 'Leave',
        data: [
          {
            color: '#34C75A',
            radius: '110%',
            innerRadius: '88%',
            y: 80,
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
