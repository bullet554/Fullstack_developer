/* Задание 1: "Получение данных о пользователе"
Реализуйте асинхронную функцию для получения данных о пользователе с удаленного
сервера:

Функция getUserData
    ● Описание:
        1. Функция принимает идентификатор пользователя (ID) в качестве
           аргумента и использует fetch для получения данных с удаленного
           сервера.
        2. Функция возвращает промис, который разрешается с объектом данных о
           пользователе, если запрос был успешным.
        3. Если пользователь с указанным ID не найден, промис должен быть
           отклонен с соответствующим сообщением об ошибке.
    ● Последовательность действий:
        1. Вызовите fetch, передав URL с нужным ID пользователя.
        2. Если ответ успешен (код 200), извлеките данные с помощью
           response.json().
        3. Верните объект с данными о пользователе.
        4. Если ответ не успешен, отклоните промис с сообщением об ошибке.

Пример использования функции
getUserData(1)
    .then(user => console.log(user))
    .catch(error => console.error(error)); 
*/


async function getUserData(userId) {
    try {
        if (typeof userId !== 'number' || userId <= 0) {
            throw new Error('Неверный ID пользователя');
        }

        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

        if (!response.ok) {
            const status = response.status;
            if (status === 404) {
                throw new Error(`Пользователь с ID ${userId} не найден`);
            } else {
                throw new Error(`Ошибка при получении данных: ${status}`);
                
            }
        }

        const userData = await response.json();
        return userData;
    }
    catch (error) {
        throw error;
    }
}

getUserData(1)
    .then(user => console.log(user))
    .catch(error => console.error(error)); 