
function createCounter(number = 0){
    return {
        increment(step = 1){
            number += step;
            return number;
        },
        decrement(step = 1){
            number -= step;
            return number;
        },
        getValue(){
            return number;
        }

    }
};

const counter = createCounter(10);
counter.increment();
console.log(counter.getValue());
counter.decrement();
console.log(counter.getValue());
//console.log(counter._value);

