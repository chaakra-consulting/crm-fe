const dealsChart = {
    series: [{
        name: "sales",
        colors: ['#FFC38F'],
        data: [{
            x: 'Inpipeline',
            y: 400,

        }, {
            x: 'Follow Up',
            y: 130
        }, {
            x: 'Schedule',
            y: 248
        }, {
            x: 'Conversation',
            y: 470
        }, {
            x: 'Won',
            y: 470
        }, {
            x: 'Lost',
            y: 180
        }]
    }],
    chart: {
        type: 'bar',
        height: 275,
        plotOptions: {
            bar: {
                borderRadiusApplication: 'around',
                columnWidth: '40%',
            }
        },
        colors: ['#00918E'],
        xaxis: {
            type: 'category',
            group: {
                style: {
                    fontSize: '7px',
                    fontWeight: 700,
                },
            }
        },
    },
};

const lastChart = {
    series: [{
        data: [400, 220, 448,]
    }],
    chart: {
        type: 'bar',
        height: 150,
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#FC0027'],
        xaxis: {
            categories: ['Conversation', 'Follow Up', 'Inpipeline'
            ],
        }
    },
};

const wonChart = {
    series: [{
        data: [400, 122, 250]
    }],
    chart: {
        type: 'bar',
        height: 150,
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#5CB85C'],
        xaxis: {
            categories: ['Conversation', 'Follow Up', 'Inpipeline'
            ],
        }
    },
};

const dealsYear = {
    series: [{
        name: "Deals",
        data: [1, 2, 3, 1.5, 2.2, 4, 3.0, 2.0, 3.0, 1.8, 3.0, 6.0]
    }],
    chart: {
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
        colors: ['#FFA201'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        fill: {
            type: 'solid',
            opacity: 0 // ✅ this removes area bg color
        },
        markers: {
            size: 5,
            shape: 'circle',
            strokeWidth: 2,
            strokeColors: '#FFA201',
            hover: {
                size: 7
            }
        },
        grid: {
            borderColor: '#E8E8E8',
            strokeDashArray: 4,      // Dashed lines
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

const reportChart = {
    series: [{
        name: "Reports",
        data: [40, 30, 20, 30, 22, 20, 30, 20, 22, 30, 15, 20]
    }],
    chart: {
        height: 273,
        type: 'area',
        zoom: {
            enabled: false
        },
        colors: ['#4A00E5'],
        dataLabels: {
            enabled: false
        },
        title: {
            text: '',
            align: 'left'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
            min: 10,
            max: 60,
            tickAmount: 5,
            labels: {
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


export { dealsChart, lastChart, wonChart, dealsYear, reportChart };