/* Задание 2: "Отправка данных на сервер"
Реализуйте функцию для отправки данных о пользователе на сервер:

Функция saveUserData
    ● Описание:
        ○ Функция принимает объект с данными о пользователе и использует
          fetch для отправки данных на удаленный сервер.
        ○ Функция возвращает промис, который разрешается, если данные
          успешно отправлены.
        ○ Если запрос неуспешен, промис должен быть отклонен с
          соответствующим сообщением об ошибке.
    ● Подсказка:
        ○ Используйте метод POST и задайте заголовок Content-Type как
          application/json.
        ○ Объект с данными о пользователе необходимо сериализовать в
          JSON-строку с помощью JSON.stringify().

Пример использования функции 
const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};

saveUserData(user)
    .then(() => {
        console.log('User data saved successfully');
    })
    .catch(error => {
        console.error(error);
    });
*/


async function saveUserData(userData) {
    try {
        const jsonData = JSON.stringify(userData);

        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        });

        if (!response.ok) {
            throw new Error(`Ошибка отправки данных: ${response.status}`);
        }

        const result = await response.json();
        console.log('Данный отправлены успешно: ', result);

        return result;
    } 
    catch (error) {
        console.error('Ошибка при отправке данных: ', error);
        throw error;
    }
};

const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};

saveUserData(user)
    .then(() => {
        console.log('Пользовательские данные успешно сохранены');
    })
    .catch(error => {
        console.error(error);
    });