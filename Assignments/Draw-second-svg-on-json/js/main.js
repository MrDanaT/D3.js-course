/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

d3.json("./data/buildings.json").then((data) => {
    data.forEach(building => building.height = +building.height);

    var svg = d3.select("#chart-area").append("svg")
        .attr("width", 800)
        .attr("height", 800);

    var rectangles = svg.selectAll("rect").data(data);

    let i = 1;

    rectangles.enter().append("rect")
        .attr("x", (obj, idx) => {
            let xPos = 50 * (i++);
            return xPos;
        })
        .attr("y", 50)
        .attr("width", 30)
        .attr("height", (obj) => {
            let yPos = obj.height;
            return yPos;
        })
        .attr("fill", "grey");
}).catch(err => {
    console.log(err);
});