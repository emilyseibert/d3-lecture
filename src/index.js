import LineChart from './components/StarterLineChart.js';

const n = 21;

// data = [{y}, {y}, ... n-1]
const data = d3.range(n).map(() => Object.assign({}, {y: d3.randomUniform(1)()}));

new LineChart({
    element: document.querySelector('.chart-container'),
    dataset: data
});