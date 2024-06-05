var options = {
    series: [{
        data: [4800, 3200, 5500, 4600, 6800, 4600, 5700, 3500, 4600, 6000, 3500, 4600, 4600, 4200, 3600],
        color: '#53FC18',
    }],
    chart: {
        height: 410,
        type: 'bar',
        toolbar: {
            show: true,
            tools: {
                download: false
            }
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '10px',
            horizontal: false,
            borderRadius: 4,
            borderRadiusApplication: 'end',
            dataLabels: {
                total: {
                    enabled: false
                }
            }
        },
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    title: {
        text: 'Earnings',
        align: 'left'
    },
    xaxis: {
        categories: [
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'
        ],
        labels: {
            style: {
                fontSize: '12px'
            }
        }
    },
    yaxis: {
        tickAmount: 4,
        min: 0,
        max: 8000,
        labels: {
            formatter: function (value) {
                return value;
            },
        },
    },
    
    responsive: [
        {
            breakpoint: 620,
            options: {
                chart: {
                    height: 335
                },
            }
        },
        {
            breakpoint: 500,
            options: {
                plotOptions: {
                    bar: {
                        columnWidth: '5px',
                        borderRadius: 2,
                    },
                }
            }
        },
        {
            breakpoint: 430,
            options: {
                chart: {
                    width: '100%',
                    height: '100%'
                },
            }
        },
    ]
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
