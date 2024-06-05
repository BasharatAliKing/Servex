var options = {
    series: [{
        name: 'Spent',
        data: [400, 520, 600, 900, 760, 630, 420],
        color: '#FFC01E',
    }, {
        name: 'Earning',
        data: [750, 990, 1130, 1290, 1430, 1200, 790],
        color: '#53FC18'
    }],
    chart: {
        type: 'bar',
        // height: 370,
        stacked: true,
        toolbar: {
            show: true,
            tools: {
                download: false
            }
        },
        zoom: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 10,
            borderRadiusApplication: 'end',
            borderRadiusWhenStacked: 'last',
            dataLabels: {
                total: {
                    enabled: false
                }
            }
        },
    },
    xaxis: {
        categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    },
    yaxis: {
        min: 0,
        max: 3000,
        tickAmount: 3,
        labels: {
            formatter: function (value) {
                return value === 0 ? '0' : (value / 1000) + 'k';
            }
        }
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        offsetY: 30,
    },
    fill: {
        opacity: 1
    },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();



var options2 = {
    series: [
        {
            name: "Income",
            data: [260, 400, 250, 160, 270, 260, 160, 90, 180, 700, 80, 260]
        },
        {
            name: "Expenses",
            data: [200, 80, 200, 90, 100, 150, 160, 260, 480, 70, 270, 480]
        }
    ],
    chart: {
        // height: 745,
        type: 'line',
        dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
        },
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        }
    },
    colors: ['#53FC18', '#FFC01E'],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth'
    },
    title: {
        text: 'Overview',
        align: 'left'
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yaxis: {
        tickAmount: 5,
        min: 0,
        max: 1500,
        labels: {
            formatter: function (value) {
                return '$' + value;
            },
        },
        values: [0, 100, 250, 500, 1000, 1500]
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
    },
    // responsive: [
    //     {
    //         breakpoint: 1030,
    //         options: {
    //             chart: {
    //                 height: 635
    //             }
    //         }
    //     }
    //     // ,
    //     // {
    //     //     breakpoint: 700,
    //     //     options: {
    //     //         chart: {
    //     //             height: 500
    //     //         }
    //     //     }
    //     // }
    // ]
};

var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.render();


document.getElementById('theme-changer').addEventListener('click', function() {
    document.documentElement.classList.toggle('light-theme');
    updateImageSources();
});

function updateImageSources() {
    const imageFolder = getComputedStyle(document.documentElement).getPropertyValue('--image-folder').trim();
    const logoImage = getComputedStyle(document.documentElement).getPropertyValue('--logo-image').trim();
    const footerLogoImage = getComputedStyle(document.documentElement).getPropertyValue('--footer-logo-image').trim();

    console.log('Current image folder:', imageFolder); // Debugging line
    console.log('Current logo image:', logoImage); // Debugging line
    console.log('Current footer logo image:', footerLogoImage); // Debugging line

    document.querySelectorAll('.theme-img').forEach(img => {
        if (img.classList.contains('logo')) {
            img.setAttribute('src', logoImage);
        } else if (img.classList.contains('footer-logo')) {
            img.setAttribute('src', footerLogoImage);
        } else {
            const imageName = img.getAttribute('src').split('/').pop(); // Get the image file name
            const newSrc = `${imageFolder}${imageName}`;
            console.log('Updating image:', imageName, 'to', newSrc); // Debugging line
            img.setAttribute('src', newSrc); // Update the src attribute
        }
    });
}



// Responsive Header
let menuBar = document.getElementById('menu');
let responsiveHeader = document.querySelector('.responsive-header');

menuBar.addEventListener('click', () =>{
    if(responsiveHeader.style.display === "block") {
        responsiveHeader.style.display = "none";
    } else {
        responsiveHeader.style.display = "block";
    }

    if(menuBar.classList.contains ('bx-menu')){
        menuBar.classList.remove('bx-menu');
        menuBar.classList.add('bx-x');
    } else if(menuBar.classList.contains('bx-x')){
        menuBar.classList.add('bx-menu');
        menuBar.classList.remove('bx-x');
    }
});