/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

d3.json("./data/buildings.json").then((data) => {
    data.forEach(building => building.height = +building.height);

    var svg = d3.select("#chart-area").append("svg")
        .attr("width", 400)
        .attr("height", 400);

    var rectangles = svg.selectAll("rect").data(data);

    let i = 1;

    var y = d3.scaleLinear().domain([0, 828]).range([0, 400]);
    // var y = d3.scaleLog().base(10).domain([1,1000]).range([0,1000]);

    rectangles.enter().append("rect")
        .attr("x", (obj, idx) => {
            let xPos = 50 * (i++);
            return xPos;
        })
        .attr("y", 50)
        .attr("width", 30)
        .attr("height", (obj) => {
            let height = obj.height;
            return y(height);
        })
        .attr("fill", "grey");
}).catch(err => {
    console.log(err);
});