/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/

var data = [25, 20, 10, 12, 15];

var svg = d3.select("#chart-area").append("svg")
    .attr("width", 400)
    .attr("height", 400);

var circles = svg.selectAll("circle")
    .data(data);

circles.enter()
    .append("circle")
    .attr("cx", (d, idx) => {
        console.log(`Item ${d} at index ${idx}`);
        return 25 + idx * 25;
    })
    .attr("cy", function (d, idx) {
        return d + idx * (25 * (Math.random() * 2 + 1));
    })
    .attr("r", function (d) {
        console.log(`Item ${d}`);
        return d;
    })
    .attr("fill", (d) => {
        var color = [];

        for (let i = 0; i < 3; i++) {
            color.push(Math.floor(Math.random() * 256));
        }

        console.log(`Item ${d}`);
        return 'rgb(' + color.join(',') + ')';
    });