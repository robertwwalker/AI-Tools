import { MMSim } from "./simulation.js"

const lambdaSlider = document.getElementById("lambda")
const muSlider = document.getElementById("mu")

const lambdaVal = document.getElementById("lambdaVal")
const muVal = document.getElementById("muVal")

const runBtn = document.getElementById("run")

lambdaSlider.oninput = () => lambdaVal.textContent = lambdaSlider.value
muSlider.oninput = () => muVal.textContent = muSlider.value

runBtn.onclick = runSimulation

function runSimulation() {

const lambda = Number(lambdaSlider.value)
const mu = Number(muSlider.value)

const sim = new MMSim(lambda, mu)

const result = sim.run()

document.getElementById("completed").textContent =
result.completed

document.getElementById("wait").textContent =
result.avgWait.toFixed(2)

let theory = lambda/(mu-lambda)

if (lambda >= mu) theory = "unstable"

document.getElementById("theory").textContent = theory

drawQueue(result.queueLength)

}

function drawQueue(n) {

const queueDiv = document.getElementById("queue")

queueDiv.innerHTML = ""

for (let i=0;i<n;i++) {

const el = document.createElement("div")

el.className = "job"

queueDiv.appendChild(el)

}

}