import LineChart from './components/AnswerKeyLineChart.js';

const n = 21;

// data = [{y}, {y}, ... n-1]
const data = d3.range(n).map(() => Object.assign({}, {y: d3.randomUniform(1)()}));

const chart = new LineChart({
    element: document.querySelector('.chart-container'),
    dataset: data
});

const lineModifier = document.querySelectorAll("button.line-color")[0];
const lineColor = lineModifier.textContent.split(" ")[0];
lineModifier.addEventListener('click', () => {
    chart.setColor(lineColor);
});

const pointModifier = document.querySelectorAll("button.point-color")[0];
const pointColor = pointModifier.textContent.split(" ")[0];
pointModifier.addEventListener('click', () => {
    chart.setPointColor(pointColor);
});