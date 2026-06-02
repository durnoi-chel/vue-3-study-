
function createCounter(number = 0)  { // функция для создания счетчика, принимает начальное значение (по умолчанию 0) в данном случае number является локальной переменной а не глобальной и доступа к ней из вне мы не имеем
    return  {
        increment(step = 1)  { // функция для увеличения счетчика на заданное значение (по умолчанию 1)
            number += step;
            return number; // возвращается значение переменной а не она сама пользователь никак не может с ней взаимодействовать
        },
        decrement(step = 1)  { 
            number -= step;
            return number;
        },
        getValue()  { 
            return number;
        }

    }
}
export {createCounter};

// 


//console.log(counter._value);



