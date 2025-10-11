/* Задание 4 (Необязательное)
Описание задачи:
1. Получите от пользователя число.
2. Выведите разряды числа: количество сотен, десятков и единиц. */


let num = Number(prompt('Введите число:'));

let hundreds = Math.floor(num / 100);
let decades = Math.floor((num % 100) / 10);
let units = num % 10;

console.log(`В числе ${num}: ${hundreds} сотен, ${decades} десятков, ${units} едениц.`);