import LineChart from './components/DemoLineChart.js';

const n = 21;
const chart = new LineChart({
    element: document.querySelector('.chart-container'),
    dataset: d3.range(n).map(() => Object.assign({}, {y: d3.randomUniform(1)()}))
});

const modifiers = document.querySelectorAll("button.color");

for (let button of modifiers) {
    const color = button.textContent.split(" ")[0];
    button.addEventListener('click', () => {
        chart.setColor(color);
    });
}