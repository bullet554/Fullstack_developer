/* Задание 3
Описание задачи:
1. Сгенерируйте массив из 5 случайных цифр от 0 до 9.
2. Рассчитайте сумму элементов массива.
3. Найдите минимальное число в массиве.
4. Определите, есть ли в массиве число 3.
 */


const arr = [];

for (let i = 0; i < 5; i++) {
    arr.push(getRandomNumber());
}

// 1
console.log(arr);

// 2
sumElementsArr(arr);

// 3
findMinNum(arr);

// 4
findValue(arr);


function getRandomNumber() {
    return Math.floor(Math.random() * 10); // 10 - потому что диапазон [0, 10)
}

function sumElementsArr() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum += element;
    }
    console.log(`Сумма всех значений массива: ${sum}`);
}

function findMinNum() {
    const minNum = Math.min(...arr);

    console.log(`Минимальное значение в массиве: ${minNum}`);
}

function findValue() {
    if (arr.includes(3) === true) {
        console.log('В массиве есть значение 3');
    } else {
        console.log('В массиве нет значения 3');
    }
}