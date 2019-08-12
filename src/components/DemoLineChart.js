export default class LineChart {
    constructor(args) {
        this.dataset = args.dataset;
        this.element = args.element;

        // initialize chart
        this.draw();
    }

    draw() {
        // Use the margin convention practice https://bl.ocks.org/mbostock/3019563
        this.margin = {
            top: 50,
            right: 50,
            bottom: 50,
            left: 50
        };
        this.width = window.innerWidth - this.margin.left - this.margin.right; // Use the window's width 
        this.height = window.innerHeight - this.margin.top - this.margin.bottom; // Use the window's height

        // Add the SVG to the page 
        this.chart = d3.select(this.element)// get body HTML element
              .append("svg") // append <svg></svg> element & set dimentions
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom)
                .append("g") // append <g></g> group element within <svg> and center it.
                    .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

        this.createScales();
        this.addAxes();
        this.addLine();
        this.addPointsOnLine();
    }

    generateLine() {
        return d3.line()
                .x((d, i) => this.xScale(i)) // set the x values for the line generator
                .y(d => this.yScale(d.y)) // set the y values for the line generator 
    }
    // X scale will use the index of our data. Maps the number of data points (domain) to pixel range (range)
    // Y scale will use the randomly generated number 
    // defines functions to calculate where the x and y value will sit on a range of pixels
    createScales() {
        const sizeOfData = this.dataset.length;

        this.xScale = d3.scaleLinear()
                        .domain([0, sizeOfData - 1]) // input
                        .range([0, this.width]); // output
        
        this.yScale = d3.scaleLinear()
                        .domain([0, 1]) // input is from 0 to 1 on y axis
                        .range([this.height, 0]); // height ranges to map input to pixel range.
    }

    addAxes() {
        // Call the x axis in a group tag
        this.chart.append("g") // appends group inside centered group
            .attr("class", "x axis") // give class to <g>
            .attr("transform", "translate(0," + this.height + ")") // start drawing x axis in bottom left of svg
            .call(d3.axisBottom(this.xScale)); // Create an axis component with d3.axisBottom

        // Call the y axis in a group tag
        this.chart.append("g") // appends group inside centered group
            .attr("class", "y axis") // give class to <g>
            .call(d3.axisLeft(this.yScale)); // Create an axis component with d3.axisLeft
    }

    // Append the path, bind the data, and call the line generator 
    addLine() {
        this.chart.append("path")
            .datum(this.dataset) // Binds data to the line 
            .attr("class", "line") // Assign a class for styling 
            .attr("d", this.generateLine()) // d is the path to be drawn. Pass the function to call to generate path.
            .style('stroke', this.lineColor || '#ffab00'); // set line color
    }

    // Appends a circle for each datapoint 
    addPointsOnLine() {
        this.chart.selectAll(".dot") // even if nothing is returned, this creates a selector for future data binding
            .data(this.dataset) // binds dataset to the selection
            .enter().append("circle") // Uses the enter().append() method to populate <circle> for each 
            .attr("class", "dot") // Assign a class for styling
            .attr("cx", (d, i) => this.xScale(i)) // x coord of circle
            .attr("cy", (d) => this.yScale(d.y)) // y coord of circle
            .attr("r", 5) // radius of circle
    }

    // changes line color
    setColor(newColor) {
      this.chart.selectAll(".line")
        .style('stroke', newColor);

      this.lineColor = newColor;
    }
}




/// Most examples are in long form, all in one html file. I've broken out this example into a class to show
/// how D3 code will likely appear in production. See if you can align the 'long form' code with the code above.


// // Use the margin convention practice https://bl.ocks.org/mbostock/3019563
// const margin = {top: 50, right: 50, bottom: 50, left: 50}
// const width = window.innerWidth - margin.left - margin.right; // Use the window's width 
// const height = window.innerHeight - margin.top - margin.bottom; // Use the window's height


// // Number of data points
// const n = 21;

// // X scale will use the index of our data. Maps the number of data points (domain) to pixel range (range)
// // defines a function to calculate where the value will sit on x range of pixels
// const xScaleFunction = d3.scaleLinear()
//     .domain([0, n-1]) // input
//     .range([0, width]); // output

// // Y scale will use the randomly generated number 
// // defines a function to calculate where the value will be on y range of pixels
// const yScaleFunction = d3.scaleLinear()
//     .domain([0, 1]) // input is from 0 to 1 on y axis
//     .range([height, 0]); // height ranges to map input to pixel range.

// const lineFunction = d3.line()
//     .x((d, i) => xScaleFunction(i)) // set the x values for the line generator
//     .y(d => yScaleFunction(d.y)) // set the y values for the line generator 

// const tooltip = d3.select("body").append("div")	
//     .attr("class", "tooltip")				
//     .style("opacity", 0);

// // An array of objects of length N. Each object has key -> value pair, the key being "y" and the value is a random number
// const dataset = d3.range(n).map(() => Object.assign({}, {y: d3.randomUniform(1)()}))


// // Add the SVG to the page 
// const svg = d3.select("body")// get body HTML element
//               .append("svg") // append <svg></svg> element & set dimentions
//                 .attr("width", width + margin.left + margin.right)
//                 .attr("height", height + margin.top + margin.bottom)
//                 .append("g") // append <g></g> group element within <svg> and center it.
//                     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// // Call the x axis in a group tag
// svg.append("g") // appends group inside centered group
//     .attr("class", "x axis") // give class to <g>
//     .attr("transform", "translate(0," + height + ")") // start drawing x axis in bottom left of svg
//     .call(d3.axisBottom(xScaleFunction)); // Create an axis component with d3.axisBottom

// // Call the y axis in a group tag
// svg.append("g") // appends group inside centered group
//     .attr("class", "y axis") // give class to <g>
//     .call(d3.axisLeft(yScaleFunction)); // Create an axis component with d3.axisLeft


// // Append the path, bind the data, and call the line generator 
// svg.append("path")
//     .datum(dataset) // Binds data to the line 
//     .attr("class", "line") // Assign a class for styling 
//     .attr("d", lineFunction); // d is the path to be drawn. Pass the function to call to generate path.


// // Appends a circle for each datapoint 
// svg.selectAll(".dot") // even if nothing is returned, this creates a selector for future data binding
//     .data(dataset) // binds dataset to the selection
//     .enter().append("circle") // Uses the enter().append() method to populate <circle> for each 
//     .attr("class", "dot") // Assign a class for styling
//     .attr("cx", function(d, i) { return xScaleFunction(i) }) // x coord of circle
//     .attr("cy", function(d) { return yScaleFunction(d.y) }) // y coord of circle
//     .attr("r", 5) // radius of circle