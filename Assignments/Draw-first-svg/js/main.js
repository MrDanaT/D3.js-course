/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/

var svg = d3.select("#svg-place").append("svg")
    .attr("width", 500)
    .attr("height", 400);


var borderline = svg.append("rect")
    .attr("fill", "white")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("x", 2)
    .attr("y", 2)
    .attr("width", 496)
    .attr("height", 396);

var rect = svg.append("rect")
    .attr("x", 20)
    .attr("y", 20)
    .attr("width", 100)
    .attr("height", 75)
    .attr("fill", "orange");

var ellipse = svg.append("ellipse")
    .attr("cx", 150)
    .attr("cy", 150)
    .attr("rx", 40)
    .attr("ry", 70)
    .attr("fill", "green");

var line = svg.append("line")
    .attr("x1", 20)
    .attr("x2", 260)
    .attr("y1", 20)
    .attr("y2", 260)
    .attr("stroke", "grey")
    .attr("stroke-width", 5);