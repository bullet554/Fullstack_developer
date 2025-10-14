/* Задание 4 (тайминг 25 минут)
1. Дан массив const arr = [2, 5, 9, 15, 1, 4];
Выведите в консоль те элементы массива, которые больше 3-х, но
меньше 10.
2. Найдите сумму четных чисел от 2 до 100.
3. Дан массив const = [2, 5, 9, 3, 1, 4];
Найдите сумму элементов этого массива.
4. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
5. Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл,
который будет по очереди выводить элементы этого массива в
консоль до тех пор, пока не встретится элемент со значением 0.
После этого цикл должен завершить свою работу. */


// 1
const arr1 = [2, 5, 9, 15, 1, 4];

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > 3 && arr1[i] < 10) {
        // console.log(arr1[i]);
    }   
}


// 2
let sum = 0;

for (let i = 2; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i
    }    
}

// console.log(sum);


// 3
const arr2 = [2, 5, 9, 3, 1, 4];
let sumArr = 0;

// option 1

/* for (let i = arr2.length; i > 0; i--) {    
    sumArr += arr2.pop();
} */

// option 2

for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];
    sumArr += element;
}

// console.log(sumArr);


// 4
let str = '-';

for (let i = 1; i < 10; i++) {
    str += `${i}-`;
}
// console.log(str);


// 5
const arr3 = [2, 5, 9, 0, 3, 1, 4];

for (let i = 0; i < arr3.length; i++) {
    const element = arr3[i];
    
    if (element !== 0) {
        // console.log(element);
    } else {
        break;
    }
}