// const companyChart = {
//     series: [{
//         name: 'Company',
//         data: [40, 60, 20, 80, 60, 60, 60]
//     }],
//     company: {
//         chart: {
//             height: 320,
//             type: 'bar',
//             toolbar: {
//                 show: false,
//             },
//             background: '#fff' // Background of the full chart area
//         },
//         colors: ['#E04F16'], // Progress bar color
//         plotOptions: {
//             bar: {
//                 borderRadius: 5,
//                 horizontal: false,
//                 columnWidth: '10px', // Progress bar width
//                 endingShape: 'rounded',
//                 colors: {
//                     backgroundBarColors: ['#E8E8E8'], // Background of each bar
//                     backgroundBarOpacity: 1,
//                 }
//             },
//         },
//         dataLabels: {
//             enabled: false
//         },
//         stroke: {
//             show: false
//         },
//         xaxis: {
//             categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
//             labels: {
//                 style: {
//                     colors: '#E04F16',
//                     fontSize: '13px',
//                 }
//             }
//         },
//         yaxis: {
//             labels: {
//                 offsetX: -15,
//                 show: false
//             }
//         },
//         grid: {
//             borderColor: '#E5E7EB',
//             strokeDashArray: 5,
//             padding: {
//                 left: -8,
//             },
//         },
//         legend: {
//             show: false
//         },
//         fill: {
//             opacity: 1
//         },
//         responsive: [{
//             breakpoint: 480,
//             options: {
//                 legend: {
//                     position: 'bottom',
//                     offsetX: -10,
//                     offsetY: 0
//                 }
//             }
//         }]
//     }
// }

const companyChart = {

    series: [{
        name: 'Company',
        data: [40, 60, 20, 80, 60, 60, 60]
    }],
    company: {
        chart: {
            height: 400,
            type: 'bar',
            toolbar: {
                show: false,
            },
            background: '#fff' // Background of the full chart area
        },
        colors: ['#E04F16'], // Progress bar color
        plotOptions: {
            bar: {
                borderRadius: 5,
                horizontal: false,
                columnWidth: '10px', // Progress bar width
                endingShape: 'rounded',
                colors: {
                    backgroundBarColors: ['#E8E8E8'], // Background of each bar
                    backgroundBarOpacity: 1,
                }
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: false
        },
        xaxis: {
            categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            labels: {
                style: {
                    colors: '#E04F16',
                    fontSize: '13px',
                }
            }
        },
        yaxis: {
            labels: {
                offsetX: -15,
                show: false
            }
        },
        grid: {
            borderColor: '#E5E7EB',
            strokeDashArray: 5,
            padding: {
                left: -8,
            },
        },
        legend: {
            show: false
        },
        fill: {
            opacity: 1
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }]
    }
};
// const revenueCharts = {

//     series: [
//         {
//             name: 'Income',
//             data: [40, 30, 45, 80, 85, 90, 80, 80, 80, 85, 20, 80]
//         },
//         {
//             name: 'Expenses (bg)',
//             data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
//         }
//     ],
//     income: {
//         chart: {
//             height: 260,
//             type: 'bar',
//             stacked: true,
//             toolbar: {
//                 show: false,
//             }
//         },
//         colors: ['#0E9384', '#E8E8E8'], // Progress then background
//         plotOptions: {
//             bar: {
//                 borderRadius: 5,
//                 borderRadiusWhenStacked: 'all',
//                 horizontal: false,
//                 endingShape: 'rounded',
//                 columnWidth: '24px',
//             },
//         },
//         xaxis: {
//             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//             labels: {
//                 style: {
//                     colors: '#0E9384',
//                     fontSize: '13px',
//                 }
//             }
//         },
//         yaxis: {
//             min: 0,
//             max: 100,
//             labels: {
//                 offsetX: -15,
//                 style: {
//                     colors: '#6B7280',
//                     fontSize: '13px',
//                 },
//                 formatter: function (value) {
//                     return value + "K";
//                 }
//             }
//         },
//         grid: {
//             borderColor: 'transparent',
//             strokeDashArray: 5,
//             padding: {
//                 left: -8,
//             },
//         },
//         legend: {
//             show: false
//         },
//         dataLabels: {
//             enabled: false
//         },
//         tooltip: {
//             y: {
//                 formatter: function (val) {
//                     return val / 10 + " k";
//                 }
//             }
//         },
//         fill: {
//             opacity: 1
//         },
//         responsive: [{
//             breakpoint: 480,
//             options: {
//                 legend: {
//                     position: 'bottom',
//                     offsetX: -10,
//                     offsetY: 0
//                 }
//             }
//         }]
//     }
// };

const revenueCharts = {
    series: [
        {
            name: 'Income',
            data: [40, 30, 45, 80, 85, 90, 80, 80, 80, 85, 20, 80]
        },
        {
            name: 'Expenses (bg)',
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
        }
    ],
    income: {
        chart: {
            height: 400,
            type: 'bar',
            stacked: true,
            toolbar: {
                show: false,
            }
        },
        colors: ['#e41f07', '#E8E8E8'], // Progress then background
        plotOptions: {
            bar: {
                borderRadius: 5,
                borderRadiusWhenStacked: 'all',
                horizontal: false,
                endingShape: 'rounded',
                columnWidth: '24px',
            },
        },

        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: {
                style: {
                    colors: '#6B7280',
                    fontSize: '13px',
                }
            }
        },
        yaxis: {
            min: 0,
            max: 100,
            labels: {
                offsetX: -15,
                style: {
                    colors: '#6B7280',
                    fontSize: '13px',
                },
                formatter: function (value) {
                    return value + "K";
                }
            }
        },
        grid: {
            borderColor: 'transparent',
            strokeDashArray: 5,
            padding: {
                left: -8,
            },
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val / 10 + " k";
                }
            }
        },
        fill: {
            opacity: 1
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }]
    }

}

const donutChart = {
    series: [20, 20, 60],
    donut: {
        chart: {
            height: 240,
            type: 'donut',
            toolbar: {
                show: false,
            }
        },
        colors: ['#E41F07', '#FFA201', '#2F80ED'],
        labels: ['Enterprise', 'Premium', 'Basic'],
        plotOptions: {
            pie: {
                donut: {
                    size: '50%',
                    labels: {
                        show: false
                    },
                    borderRadius: 30
                }
            }
        },
        stroke: {
            lineCap: 'round',
            show: true,
            width: 0,    // Space between donut sections
            colors: '#fff'
        },
        dataLabels: {
            enabled: false
        },
        legend: { show: false },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    height: 180,
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
}

// const donutChart = {
//     series: [20, 20, 60],
//     donut: {
//         chart: {
//             height: 240,
//             type: 'donut',
//             toolbar: {
//                 show: false,
//             }
//         },
//         colors: ['#E41F07', '#FFA201', '#2F80ED'],
//         labels: ['Enterprise', 'Premium', 'Basic'],
//         plotOptions: {
//             pie: {
//                 donut: {
//                     size: '50%',
//                     labels: {
//                         show: false
//                     },
//                     borderRadius: 30
//                 }
//             }
//         },
//         stroke: {
//             lineCap: 'round',
//             show: true,
//             width: 0,    // Space between donut sections
//             colors: '#fff'
//         },
//         dataLabels: {
//             enabled: false
//         },
//         legend: { show: false },
//         responsive: [{
//             breakpoint: 480,
//             options: {
//                 chart: {
//                     height: 180,
//                 },
//                 legend: {
//                     position: 'bottom'
//                 }
//             }
//         }]
//     }
// }

const totalChart = {
    series: [{
        name: "Messages",
        data: [25, 66, 41, 12, 36, 9, 21]
    }],
    total: {
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0, // Start with 0 opacity (transparent)
                opacityTo: 0    // End with 0 opacity (transparent)
            }
        },
        chart: {
            foreColor: '#fff',
            type: "bar",
            width: 50,
            toolbar: {
                show: !1
            },
            zoom: {
                enabled: !1
            },
            dropShadow: {
                enabled: 0,
                top: 3,
                left: 14,
                blur: 4,
                opacity: .12,
                color: "#fff"
            },
            sparkline: {
                enabled: !0
            }
        },
        markers: {
            size: 0,
            colors: ["#F26522"],
            strokeColors: "#fff",
            strokeWidth: 2,
            hover: {
                size: 7
            }
        },
        plotOptions: {
            bar: {
                horizontal: !1,
                columnWidth: "35%",
                endingShape: "rounded"
            }
        },
        dataLabels: {
            enabled: !1
        },
        stroke: {
            show: !0,
            width: 2.5,
            curve: "smooth"
        },
        colors: ["#F26522"],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
        },
        tooltip: {
            theme: "dark",
            fixed: {
                enabled: !1
            },
            x: {
                show: !1
            },
            y: {
                title: {
                    formatter: function (e) {
                        return ""
                    }
                }
            },
            marker: {
                show: !1
            }
        }
    }
};

const activeChart = {
    series: [{
        name: "Active Company",
        data: [25, 40, 35, 20, 36, 9, 21]
    }],
    active: {
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0, // Start with 0 opacity (transparent)
                opacityTo: 0    // End with 0 opacity (transparent)
            }
        },
        chart: {
            foreColor: '#fff',
            type: "area",
            width: 50,
            toolbar: {
                show: !1
            },
            zoom: {
                enabled: !1
            },
            dropShadow: {
                enabled: 0,
                top: 3,
                left: 14,
                blur: 4,
                opacity: .12,
                color: "#fff"
            },
            sparkline: {
                enabled: !0
            }
        },
        markers: {
            size: 0,
            colors: ["#F26522"],
            strokeColors: "#fff",
            strokeWidth: 2,
            hover: {
                size: 7
            }
        },
        plotOptions: {
            bar: {
                horizontal: !1,
                columnWidth: "35%",
                endingShape: "rounded"
            }
        },
        dataLabels: {
            enabled: !1
        },
        stroke: {
            show: !0,
            width: 2.5,
            curve: "smooth"
        },
        colors: ["#4B3088"],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
        },
        tooltip: {
            theme: "dark",
            fixed: {
                enabled: !1
            },
            x: {
                show: !1
            },
            y: {
                title: {
                    formatter: function (e) {
                        return ""
                    }
                }
            },
            marker: {
                show: !1
            }
        }
    }
};

const inactiveChart = {
    series: [{
        name: "Inactive Company",
        data: [25, 10, 35, 5, 25, 28, 21]
    }],
    inactive: {
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0, // Start with 0 opacity (transparent)
                opacityTo: 0    // End with 0 opacity (transparent)
            }
        },
        chart: {
            foreColor: '#fff',
            type: "area",
            width: 50,
            toolbar: {
                show: !1
            },
            zoom: {
                enabled: !1
            },
            dropShadow: {
                enabled: 0,
                top: 3,
                left: 14,
                blur: 4,
                opacity: .12,
                color: "#fff"
            },
            sparkline: {
                enabled: !0
            }
        },
        markers: {
            size: 0,
            colors: ["#F26522"],
            strokeColors: "#fff",
            strokeWidth: 2,
            hover: {
                size: 7
            }
        },
        plotOptions: {
            bar: {
                horizontal: !1,
                columnWidth: "35%",
                endingShape: "rounded"
            }
        },
        dataLabels: {
            enabled: !1
        },
        stroke: {
            show: !0,
            width: 2.5,
            curve: "smooth"
        },
        colors: ["#177DBC"],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
        },
        tooltip: {
            theme: "dark",
            fixed: {
                enabled: !1
            },
            x: {
                show: !1
            },
            y: {
                title: {
                    formatter: function (e) {
                        return ""
                    }
                }
            },
            marker: {
                show: !1
            }
        }
    }
};

const locationChart = {
    series: [{
        name: "Inactive Company",
        data: [30, 40, 15, 23, 20, 23, 25]
    }],
    location: {
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0, // Start with 0 opacity (transparent)
                opacityTo: 0    // End with 0 opacity (transparent)
            }
        },
        chart: {
            foreColor: '#fff',
            type: "area",
            width: 50,
            toolbar: {
                show: !1
            },
            zoom: {
                enabled: !1
            },
            dropShadow: {
                enabled: 0,
                top: 3,
                left: 14,
                blur: 4,
                opacity: .12,
                color: "#fff"
            },
            sparkline: {
                enabled: !0
            }
        },
        markers: {
            size: 0,
            colors: ["#F26522"],
            strokeColors: "#fff",
            strokeWidth: 2,
            hover: {
                size: 7
            }
        },
        plotOptions: {
            bar: {
                horizontal: !1,
                columnWidth: "35%",
                endingShape: "rounded"
            }
        },
        dataLabels: {
            enabled: !1
        },
        stroke: {
            show: !0,
            width: 2.5,
            curve: "smooth"
        },
        colors: ["#2DCB73"],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
        },
        tooltip: {
            theme: "dark",
            fixed: {
                enabled: !1
            },
            x: {
                show: !1
            },
            y: {
                title: {
                    formatter: function (e) {
                        return ""
                    }
                }
            },
            marker: {
                show: !1
            }
        }
    }
};

export { companyChart, revenueCharts, donutChart, totalChart, activeChart, inactiveChart, locationChart }