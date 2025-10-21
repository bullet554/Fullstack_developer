/* Задание №2
Создание счетчика
Напишите функцию createCounter, которая создает счетчик и возвращает объект с тремя методами: increment, decrement и getValue. 
Метод increment должен увеличивать значение счетчика на 1, метод decrement должен уменьшать значение счетчика на 1, а метод 
getValue должен возвращать текущее значение счетчика. Значение счетчика должно быть доступно только через методы объекта, а не
напрямую.

Подсказка: Функция createCounter возвращает объект с методами для увеличения
и уменьшения счетчика. Приватная переменная count доступна только через методы
объекта, что обеспечивает инкапсуляцию данных.

Пример использования
const counter = createCounter();
console.log(counter.increment()); // Ожидаемый вывод: 1
console.log(counter.increment()); // Ожидаемый вывод: 2
console.log(counter.decrement()); // Ожидаемый вывод: 1
console.log(counter.getValue()); // Ожидаемый вывод: 1 
*/


function createCounter() {
    let count = 0;
    return {
        increment() {
            count++;
            return count;
        }, 
        decrement() {
            count--;
            return count;
        }, 
        getValue() {
            return count;
        }
    };
};

const counter = createCounter();
console.log(counter.increment()); // Ожидаемый вывод: 1
console.log(counter.increment()); // Ожидаемый вывод: 2
console.log(counter.decrement()); // Ожидаемый вывод: 1
console.log(counter.getValue()); // Ожидаемый вывод: 1 