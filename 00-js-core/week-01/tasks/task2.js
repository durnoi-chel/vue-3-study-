function myMap(arr = [] , callback)  {
    const newArr = [];
    for(let i=0; i<=arr.length -1; i++)  {
        newArr.push(callback(arr[i]));
    }
    return newArr;
}
function myFilter(arr = [], callback)  {
    const newArr = [];
    for(let i=0; i < arr.length; i++)  {
        if(callback(arr[i]))  {
            newArr.push(arr[i]);
        }
    };
    return newArr;

}

function myReduce(arr = [], callback, initialValue )  {
    if (arr.length === 0 && initialValue === undefined)  {
        return;
    }
    let acc;
    let startIndex;
    if(initialValue === undefined)  { // проверяем задано ли стартовое значение что бы если что не брать его дважды в случае отсутствия 
        acc = arr[0];
        startIndex = 1;
    } else  {
        acc = initialValue;
        startIndex = 0
    }
    for(let i = startIndex; i < arr.length; i++)  { // снова проверка на то что бы мы не дублировали элемент с индексом 0 дважды в случае отсутсвия заданного value
        acc = callback(acc, arr[i], i, arr); // используем в цикле для полного прохождения всех элементов и потому что acc будет использоваться в следующих шагах Ы
    }
    return acc;
}


const arr = [1, 2, 3];
const mapped = myMap(arr, x => x * 2);
console.assert(JSON.stringify(mapped) === '[2,4,6]', 'myMap failed');
const filtered = myFilter(arr, x => x > 1);
console.assert(JSON.stringify(filtered) === '[2,3]', 'myFilter failed');
const nums = [1, 2, 3, 4];

// Тест 1: Сумма с начальным значением 0
const sum = myReduce(nums, (acc, num) => acc + num, 0);
console.assert(sum === 10, 'Sum failed'); // 0+1+2+3+4 = 10