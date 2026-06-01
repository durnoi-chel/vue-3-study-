
function createCounter(number = 0){ // функция для создания счетчика, принимает начальное значение (по умолчанию 0)
    return {
        increment(step = 1){ // функция для увеличения счетчика на заданное значение (по умолчанию 1)
            number += step;
            return number;
        },
        decrement(step = 1){ // функция для уменьшения счетчика на заданное значение (по умолчанию 1)
            number -= step;
            return number;
        },
        getValue(){ // функция для получения текущего значения счетчика
            return number;
        }

    }
};
export {createCounter};

// 


//console.log(counter._value);



