/* Задание 1 (5 минут)
1. Создайте функцию delayedMessage(message, delay), которая
принимает аргументы message (строка) и delay (число). Функция
должна выводить заданное сообщение в консоль через указанную
задержку.
2. Вызовите функцию delayedMessage() три раза с разными
сообщениями и задержками. Например:
a. delayedMessage("Сообщение 1", 2000)
b. delayedMessage("Сообщение 2", 1000)
c. delayedMessage("Сообщение 3", 3000)
3. После вызова всех функций delayedMessage(), добавьте сообщение
вида "Конец программы" с помощью console.log(). */


function delayedMessage(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message, delay);
            resolve(); // Сигнализируем, что таймер завершился
        }, delay);
    });
}

Promise.all([
    delayedMessage("Сообщение 1", 2000),
    delayedMessage("Сообщение 2", 1000),
    delayedMessage("Сообщение 3", 3000)
]).then(() => {
    console.log("Конец программы");
});