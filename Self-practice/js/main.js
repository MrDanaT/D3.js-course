/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/

d3.json("./data/buildings.json").then((data) => {
    data.forEach(d => d.height = +d.height);

    console.log("Dana")
    var svg = d3.select("#chart-area").append("svg")
        .attr("width", 10000)
        .attr("height", 10000);

    let a = 0;
    let b = 1;
    let c = a + b;
    for (let i = 0; i < 100; i++) {
        a = b;
        b = c;
        c = a + b;
        svg.append("circle")
            .attr("cx", b)
            .attr("cy", b)
            .attr("r", c / 10)
            .attr("fill", (d) => {
                return 'rgb(' + a * Math.random() + ',' + b * Math.random() + ',' + c * Math.random() + ')';
            });

    }
}).catch(error => { console.log(error) })

