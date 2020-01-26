/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/

d3.json("./data/buildings.json").then((data) => {
    data.forEach(d => d.height = +d.height);

    var svg = d3.select("#chart-area").append("svg")
        .attr("width", 400)
        .attr("height", 400);

    var circles = svg.selectAll("circle")
        .data(data);

    circles.enter()
        .append("circle")
        .attr("cx", (d, idx) => {
            return 50 + idx * 25;
        })
        .attr("cy", function (d, idx) {
            return 50 + idx * (25 * (Math.random() * 2 + 1));
        })
        .attr("r", function (d) {
            return Math.sqrt(d.height);
        })
        .attr("fill", (d) => {
            if (d.height > 300)
                return 'rgb(255,0,0)';
            else if (d.height > 250)
                return 'rgb(0,255,0)';
            else
                return 'rgb(0,0,255';
        });
}).catch(error =>{console.log(error)})

