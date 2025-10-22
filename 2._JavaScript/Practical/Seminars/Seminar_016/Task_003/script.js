/* Задание 3 (20 минут)
Напишите программу, которая загружает данные с сервера с использованием
объекта XMLHttpRequest
    1. Создайте функцию loadData(url), которая принимает аргумент url (строка)
       - адрес сервера для загрузки данных.
    2. Внутри функции loadData() создайте объект XMLHttpRequest с помощью
       new XMLHttpRequest().
    3. Зарегистрируйте обработчик события onreadystatechange, который будет
       вызываться при изменении состояния запроса. Проверьте, если успешно
       выполнен запрос и успешный статус ответа сервера, то выведите полученные
       данные в консоль с помощью console.log(xhr.responseText).
    4. Откройте запрос с помощью xhr.open("GET", url, true).
    5. Отправьте запрос на сервер. 
*/


function loadData(url) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
}

loadData('https://jsonplaceholder.typicode.com/users');