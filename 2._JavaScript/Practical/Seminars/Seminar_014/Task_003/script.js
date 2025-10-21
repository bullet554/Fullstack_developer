/* Задание 3 (call, apply 20 минут)
1. Создайте объект calculator с методами add(), subtract() и multiply(), которые выполняют соответствующие математические 
   операции над двумя числами. Используйте методы call и apply для вызова этих методов с передачей аргументов.

console.log(calculator.add.call(null, 5, 3)); // Вывод: 8

console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2 */


const calculator = {
    add(param1, param2) {
        return param1 + param2;
    }, 

    subtract(param1, param2) {
        return param1 - param2;
    }, 

    multiply(param1, param2) {
        return param1 * param2;
    }
};

console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2 */