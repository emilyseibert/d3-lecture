export default class StarterLineChart {
    _chart;
    _xScale;
    _yScale;
    _lineColor = '#ffab00';

    constructor(args) {
        // set args
        this.dataset = args.dataset;
        this.element = args.element;
        this.height = args.height;
        this.width = args.width;

        // initialize chart
        this.draw();
    }

    /*
    * draw()
    * 
    * 1. Define this._chart as selected chart element and append SVG with width and height
    * 2. Call createScales function
    * 3. Call addAxes function
    * 4. Call addLine function
    */
    draw() {
      // this._chart = d3.select()
      //                 .append()
      //                 .attr("width", )
      //                 .attr("height", );
    }

    /*
    * createScales()
    * 
    * 1. Create this._xScale using d3.scaleLinear();
    * 2. Create this._yScale using d3.scaleLinear();
    * 
    * d3.scaleLinear([[domain, ]range]) : https://github.com/d3/d3-scale#scaleLinear
    * Constructs a new continuous scale with the specified domain and range, the default interpolator and clamping disabled. If either domain or range are not specified, each defaults to [0, 1].
    *
    *  _xScale(valueOfData) === xPixelCoord
    *  _yScale(valueOfData) === yPixelCoord
    *  x values: index of dataset, 0 -> n-1
    *  Y values: value b/t 0 and 1
    */
    createScales() {
      // DOMAIN: range of values of input of data
      // RANGE: range of values of pixel space
      // this._xScale = d3.scaleLinear()
      //                 .domain([ ]) // input
      //                 .range([ ]); // output
      
      // this._yScale = d3.scaleLinear()
      //                 .domain([]) // input is from 0 to 1 on y axis
      //                 .range([]); // height ranges to map input to pixel range.
    }

    /*
    * addAxes()
    * 
    * Append x and y axex groups to chart svg.
    * X axis should be on the bottom of the chart, apply class 'x axis'
    * Y axis should be on the left of the chart, apply class 'y axis'
    * 
    * d3.axisBottom(scale): https://github.com/d3/d3-axis#axisBottom
    * d3.axisLeft(scale): https://github.com/d3/d3-axis#axisLeft 
    */
    addAxes() {
      // x axis
      // requires translate transformation
      // this._chart.append() // appends group inside centered group
      //       .attr("class", ) // give class to <g>
      //       .attr("transform", "translate(0," + ___ + ")") // start drawing x axis in bottom left of svg
      //       .call(); // Create an axis component with d3.axisBottom

      // y axis
      // this._chart.append() // appends group inside centered group
      //     .attr("class", ) // give class to <g>
      //     .call(); // Create an axis component with d3.axisLeft
    }

    /*
    * addLine()
    * 
    * Append a line path to the chart, bind data, and apply "d" path
    * Apply stroke color to line
    * 
    *  .datum(): https://animateddata.co.uk/articles/d3/datajoins/
    *   binds a single entity (in this case 'path') with a selection of data
    */
    addLine() {
      // this._chart.append()
      //            .datum()
      //            .attr("class", )
      //            .attr("d", )
      //            .style("stroke", );

    }

    /*
    * generateLine()
    * 
    * Takes data and creates path "d" attribute value using d3.line()
    * d3.line(): https://github.com/d3/d3-shape#line
    * 
    * To draw a line chart with actual data, we will need to use scales to get the (x,y) coordinates of the points.
    * line.x() sets or reads the x accessor for the line, and line.y the y accessor.
    */
    generateLine() {
      // return d3.line()
      //          .x((data, index) => )
      //          .y((data, index) => );
    }
}