const leadpieChart = {
  series: [44, 55, 13, 43],
  pieCharts: {
    chart: {
      height: 440,
      type: 'pie',
    },
    legend: {
      position: 'bottom'
    },
    colors: ['#2F80ED', '#27AE60', '#FFA201', '#E41F07'],
    labels: ['Inpipeline', 'Follow Up', 'Schedule Service', 'Conversation'],
    dataLabels: {
      enabled: false
    },
    responsive: [{
      breakpoint: 1199,
      options: {
        chart: {
          height: 350
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
const contactReportChart = {
  series: [
    {
      name: "Reports",
      data: [3, 4.5, 2.0, 3.0, 2.5, 4, 2, 4, 3.5, 5, 3, 2]
    },
  ],
  reportCharts: {
    chart: {
      height: 273,
      type: 'area',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    colors: ['#4A00E5'],
    dataLabels: {
      enabled: false
    },
    title: {
      text: '',
      align: 'left'
    },
    grid: {
      borderColor: '#E8E8E8',
      strokeDashArray: 4,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yaxis: {
      min: 1,
      max: 6,
      tickAmount: 5,
      labels: {
        offsetX: -15,
        formatter: (val) => {
          return val / 1 + 'K'
        }
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left'
    }
  },
};
const leadLastChart = {
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

const leadWonCharts = {
  series: [
    {
      data: [400, 220, 448,]
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

export { leadpieChart, contactReportChart, leadLastChart, leadWonCharts };
