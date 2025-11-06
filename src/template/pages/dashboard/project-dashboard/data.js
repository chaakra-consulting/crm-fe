const contactAnalysisCharts = {
  series: [44, 55, 41, 17],
  contactCharts: {
    chart: {
      type: 'donut',
      height: 450
    },
    colors: ['#4A00E5', '#FFA201', '#0092E4', '#E41F07'],
    labels: ['Campaigns', 'Google', 'Referrals', 'Paid Social'],
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      position: 'bottom',
      formatter: function (val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex]
      }
    },
    responsive: [{
      breakpoint: 1199,
      options: {
        chart: {
          height: 320
        },
        legend: {
          position: 'bottom'
        }
      }
    }, {
      breakpoint: 575,
      options: {
        chart: {
          height: 280
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  },
};
const projectStaCharts = {
  series: [
    {
      name: "",
      data: [1200, 1000, 800, 600, 400, 200],
    },
  ],
  stagesCharts: {
    chart: {
      type: 'bar',
      height: 420,
      toolbar: {
        show: false
      }
    },

    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        distributed: true,
        barHeight: '100%',
        isFunnel: true,
      },

    },
    colors: [
      '#3538CD',
      '#06AED4',
      '#FFA201',
      '#0E9384',
      '#27AE60',
      '#E41F07',
    ],

    dataLabels: {
      enabled: true,
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex]
      },
      dropShadow: {
        enabled: true,
      },

    },
    xaxis: {
      categories: ['Inpipeline : 1454', 'Follow Up : 1454', 'Schedule service : 1454', 'Conversation : 1454', 'Win : 1454', 'Lost : 1454'],
    },
    legend: {
      show: false,
    },
  },
};
const lastProCharts = {
  series: [
    {
      data: [400, 220, 448],
    },
  ],
  lastCharts: {
    chart: {
      type: 'bar',
      height: 180,
      toolbar: {
        show: false
      }
    },

    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#EF1E1E'],
    grid: {
      borderColor: '#E8E8E8',
      strokeDashArray: 4,
    },
    xaxis: {
      categories: ['Conversation', 'Follow Up', 'Inpipeline'
      ],
    }
  },
};
const wonProCharts = {
  series: [
    {
      data: [400, 122, 250],
    },
  ],
  wonCharts: {
    chart: {
      type: 'bar',
      height: 180,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#27AE60'],
    grid: {
      borderColor: '#E8E8E8',
      strokeDashArray: 4,
    },
    xaxis: {
      categories: ['Conversation', 'Follow Up', 'Inpipeline'
      ],
    }
  },
};

export { contactAnalysisCharts, projectStaCharts, lastProCharts, wonProCharts };
