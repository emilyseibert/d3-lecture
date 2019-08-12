import LineChart from './components/DemoLineChart.js';

const n = 21;

// data = [{y}, {y}, ... n-1]
const data = d3.range(n).map(() => Object.assign({}, {y: d3.randomUniform(1)()}));

const chart = new LineChart({
    element: document.querySelector('.chart-container'),
    dataset: data,
    height: 200,
    width: 300
});

const modifiers = document.querySelectorAll("button.color");

for (let button of modifiers) {
    const color = button.textContent.split(" ")[0];
    button.addEventListener('click', () => {
        chart.setColor(color);
    });
}