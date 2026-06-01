import {createCounter} from '../tasks/task1.js';

const counter = createCounter(10);
counter.increment();
console.assert(counter.getValue() === 11);
counter.decrement();
console.assert(counter.getValue() === 10);
console.assert(counter.increment() === 11);
