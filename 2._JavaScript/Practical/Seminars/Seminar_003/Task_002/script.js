/* Задание 2 (тайминг 15 минут)
1. Сделайте функцию, которая параметрами принимает 3 числа и
выводит в консоль сумму этих чисел.
2. С помощью созданной вами функции выведите в консоль сумму
значений этих переменных.
let param1 = 1;
let param2 = 2;
let param3 = 3;
1. Дана фукнция
function func(num = 5) {
console.log(num * num);
}
Расскажите, каким будет результат каждого из вызовов функции.
func(2);
func(3);
func(); */


// 1
function sumNumbers(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}

// sumNumbers(1, -1, 1);


// 2
// // option1
// Сначала подумал, что задание заключается в том, что нужно написать еще одну функцию.
function enterData() {
    let param1 = 1;
    let param2 = 2;
    let param3 = 3;

    sumNumbers(param1, param2, param3)
}

// enterData();

// // option2
let param1 = 1;
let param2 = 2;
let param3 = 3;

// sumNumbers(param1, param2, param3);


// 3
function func(num = 5) {
    console.log(num * num);
}

/* func(2); // 4
func(3); // 9
func();  // 5 */