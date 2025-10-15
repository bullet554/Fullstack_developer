/* Задание 2 (тайминг 25 минут)
1. Даны два массива: первый с названиями дней недели, а второй - с
их порядковыми номерами:
const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
С помощью цикла создайте объект, ключами которого будут
названия дней, а значениями - их номера.
2. const obj = {x: 1, y: 2, z: 3};
Переберите этот объект циклом и возведите каждый элемент
этого объекта в квадрат. */


// 1
const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const weekday = {};

// option 1
/* for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] && arr2[i] !== undefined) {
        weekday[arr1[i]] = arr2[i];
    }
} */

// option 2
arr1.forEach((key, i) => {
    if (arr2[i] !== undefined) {
        weekday[key] = arr2[i];
    }
});

// console.log(weekday);


// 2
const obj = {x: 1, y: 2, z: 3};
const objSquare = {};
const objCube = {};

for (const key in obj) {
    objSquare[key] = obj[key] ** 2;
    objCube[key] = obj[key] ** 3;
}

console.log(objSquare);
console.log(objCube);