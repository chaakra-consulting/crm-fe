const taskYear = {
    series: [{
        name: "Task",
        data: [10, 38, 18, 47, 13, 32, 15, 40, 18, 50, 30, 15]
    }],
    task: {
        chart: {
            height: 400,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        colors: ['#3C2371'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'stepline'
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
    }

};

const leadsAnalysis = {
    series: [44, 55, 41, 17],
    leads: {
        chart: {
            type: 'donut',
        },
        colors: ['#0092E4', '#4A00E5', '#E41F07', '#FFA201'],
        labels: ['Campaigns', 'Google', 'Referrals', 'Paid Social'],
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270,
                size: '10',
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
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
};

const leadsReport = {
    series: [{
        name: "Reports",
        colors: ['#FFC38F'],
        data: [{
            x: 'Jan',
            y: 400,
        }, {
            x: 'Feb',
            y: 130
        }, {
            x: 'Mar',
            y: 240
        }, {
            x: 'Apr',
            y: 450
        }, {
            x: 'May',
            y: 250
        }, {
            x: 'Jun',
            y: 180
        }, {
            x: 'Jul',
            y: 300
        }, {
            x: 'Aug',
            y: 240
        }, {
            x: 'Sep',
            y: 300
        }, {
            x: 'Oct',
            y: 150
        }, {
            x: 'Nov',
            y: 250
        },
        {
            x: 'Dec',
            y: 500
        }]
    }],
    leads: {
        chart: {
            type: 'bar',
            height: 400,
        },
        plotOptions: {
            bar: {
                borderRadiusApplication: 'around',
                columnWidth: '50%',
            }
        },
        colors: ['#00918E'],
        xaxis: {
            type: 'category',
            group: {
                style: {
                    fontSize: '0px',
                    fontWeight: 700,
                },
            }
        },
    }

};


const contactReport = {
    series: [{
        name: "Reports",
        data: [3, 4.5, 2.0, 3.0, 2.5, 4, 2, 4, 3.5, 5, 3, 2]
    }],
    contact: {
        chart: {
            height: 400,
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
    }
};

const companyYear = {
    series: [{
        name: "Company",
        data: [15, 20, 17, 40, 22, 40, 30, 15, 55, 30, 20, 25]
    }],
    company: {
        chart: {
            height: 400,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        colors: ['#FFA201'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
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
    }
};

const projectType = {
    series: [34, 55, 50, 17],
    project: {
        chart: {
            type: 'donut',
        },
        colors: ['#4A00E5', '#5CB85C', '#339DFF', '#FFA201'],
        labels: ['Plan', 'Completed', 'Develop', 'Design'],
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
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
};

const projectYear = {
    series: [{
        name: "project",
        data: [15, 20, 17, 40, 22, 40, 30, 15, 55, 30, 20, 25]
    }],
    project: {
        chart: {
            height: 400,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        colors: ['#EA00B7'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
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
    }
};
const dealsReport = {
    series: [{
        name: 'Won Deals',
        data: [110, 85, 100, 90, 85, 105, 90, 115, 95]
    }, {
        name: 'Lost Deals',
        data: [45, 55, 50, 55, 40, 60, 55, 60, 66]
    }],
    deals: {
        chart: {
            height: 400,
            type: 'bar',
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        colors: ['#5CB85C', '#FC0027'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        fill: {
            opacity: 1

        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " Deals"
                }
            }
        }
    }
};


export { taskYear, leadsAnalysis, leadsReport, contactReport, companyYear, projectType, projectYear, dealsReport }