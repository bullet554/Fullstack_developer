/* Задание 4 (20 минут)
Переписать код с XMLHttpRequest на fetch. */


fetch('https://jsonplaceholder.typicode.com/users')
    .then((result) => {
        if (result.ok) {
            return result.text();
        }
        throw new Error('Ошибка не все ок');
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error('Много ошибок, решай вопросы');
    });