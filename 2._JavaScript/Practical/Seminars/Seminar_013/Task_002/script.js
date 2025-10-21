/* Задание 2 (Чистые функции 25минут)
Текст задания
1. Напишите функцию getEvenNumbers, которая принимает массив
чисел в качестве аргумента и возвращает новый массив,
содержащий только четные числа.
2. Задача: Напишите функцию calculateAverage, которая принимает
массив чисел в качестве аргумента и возвращает среднее значение
этих чисел.
3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
качестве аргумента и возвращает новую строку, в которой первая
буква каждого слова является заглавной. */

// 1
/* function getEvenNumbers(...rest) {
    let evenNumbers = rest.filter(number => number % 2 === 0);
    return evenNumbers;
} */

const getEvenNumbers = (...rest) => rest.filter(item => item % 2 === 0);

console.log(getEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// 2
function calculateAverage(...rest) {
    let sum = 0;
    rest.forEach(elem => {
        sum += elem;
    });
    return sum / rest.length;
}

console.log(calculateAverage(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 3
function capitalizeFirstLetter(str) {
    return str
        .split(' ')
        .map(word => {
            if (word.length === 0) return word; // сохраняем пустые строки (если были множественные пробелы)
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(' '); // собираем обратно в строку через пробелы
}

console.log(capitalizeFirstLetter('lorem ipsum dolor sit amet consectetur'));