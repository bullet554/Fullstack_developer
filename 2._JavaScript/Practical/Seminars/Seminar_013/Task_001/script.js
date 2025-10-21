/* Задание 1 (тайминг 20 минут)
1. Создайте функцию mergeArrays, которая принимает два
массива и возвращает новый массив, содержащий все
элементы из обоих массивов. Используйте spread
оператор для объединения массивов.
mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,
2, 3, 4, 5, 6]
2. Создайте функцию removeDuplicates, которая принимает
любое количество аргументов и возвращает новый
массив, содержащий только уникальные значения.
Используйте rest оператор для сбора всех аргументов в
массив а затем filter для определения дубликатов.
removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
результат: [1, 2, 3, 4, 5] */


// 1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

function mergeArrays(arr1, arr2) {
    let arrResult = [...arr1, ...arr2];
    return arrResult;
};

console.log(mergeArrays(arr1, arr2));


// 2
function removeDuplicates(...rest) {
    let arr = rest;
    return arr.filter((el, i) => i === arr.indexOf(el));
};

console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));