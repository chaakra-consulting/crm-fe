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
        chart: {
            type: 'bar',
            height: 385,
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            borderColor: '#E8E8E8',
            strokeDashArray: 4,
            padding: {
                right: -20
            }
        },
        plotOptions: {
            bar: {
                borderRadiusApplication: 'around',
                columnWidth: '50%',
            }
        },
        colors: ['#0E9384'],
        xaxis: {
            type: 'category',
            group: {
                style: {
                    fontSize: '7px',
                    fontWeight: 700,
                },
            }
        },
        yaxis: {
            labels: {
                offsetX: -13,
            }
        }
    },
};

const wonChart = {
    series: [{
        data: [400, 122, 250]
    }],
    chart: {
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

const lastChart2 = {
    series: [{
        data: [400, 220, 448,]
    }],
    last: {
        chart: {
            type: 'bar',
            height: 150,
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
        colors: ['#FC0027'],
        xaxis: {
            categories: ['Conversation', 'Follow Up', 'Inpipeline'
            ],
        }
    }
};

const lastChart = {
    series: [{
        data: [400, 220, 448,]
    }],
    chart: {
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

const leadsChart = {
    series: [{
        name: "sales",
        colors: ['#BEA4F2'],
        data: [{
            x: 'Inpipeline',
            y: 400,

        }, {
            x: 'Follow Up',
            y: 30
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
    leads: {
        chart: {
            type: 'bar',
            height: 310,
            toolbar: {
                show: false,
            },
        },
        grid: {
            borderColor: '#E8E8E8',
            strokeDashArray: 4,
            padding: {
                right: -20 // ✅ Remove extra right padding
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '30%',
                borderRadiusApplication: 'around',
            }
        },
        colors: ['#00918E'],
        yaxis: {
            labels: {
                offsetX: -13,
            }
        }
    }

};

export { dealsChart, wonChart, lastChart2, lastChart, leadsChart }