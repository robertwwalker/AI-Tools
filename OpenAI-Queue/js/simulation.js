import { exponential } from "./rng.js"

export class MMSim {

constructor(lambda, mu, duration=1000) {

this.lambda = lambda
this.mu = mu
this.duration = duration

this.time = 0

this.queue = []

this.serverBusy = false

this.completed = 0

this.waitTimes = []

}

run() {

let nextArrival = exponential(this.lambda)

let nextDeparture = Infinity

while (this.time < this.duration) {

if (nextArrival < nextDeparture) {

this.time = nextArrival

this.queue.push(this.time)

nextArrival = this.time + exponential(this.lambda)

if (!this.serverBusy) {

this.serverBusy = true

nextDeparture = this.time + exponential(this.mu)

}

}

else {

this.time = nextDeparture

let arrival = this.queue.shift()

this.waitTimes.push(this.time - arrival)

this.completed++

if (this.queue.length > 0) {

nextDeparture = this.time + exponential(this.mu)

}

else {

this.serverBusy = false

nextDeparture = Infinity

}

}

}

return {

completed: this.completed,

avgWait:
this.waitTimes.reduce((a,b)=>a+b,0)
/ this.waitTimes.length,

queueLength: this.queue.length

}

}

}