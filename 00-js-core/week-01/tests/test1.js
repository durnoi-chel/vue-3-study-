import {createCounter} from '../tasks/task1.js';

const counter = createCounter(10);
counter.increment();
console.log(counter.getValue());
counter.decrement();
console.log(counter.getValue());