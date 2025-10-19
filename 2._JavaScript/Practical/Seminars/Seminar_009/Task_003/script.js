/* Задание 3 (тайминг 20 минут)
1 Создать поле ввода (пароль)
2 Кнопка отправить
3 Если пользователь вводит текст “пароль” то поле ввода
должно быть подсвечено зеленым цветом
4 Если пароль неверный, у поля ввода появляется красная
обводка и текст “пароль неверный” */


const boxEl = document.querySelector('.content');
const passwordEl = boxEl.querySelector('.password');
const btnEl = document.querySelector('.button');
const password = 'пароль';

const h2El = document.createElement('h2');
h2El.textContent = 'пароль неверный';

btnEl.addEventListener('click', function (e) {
    if (passwordEl.value !== password) {
        boxEl.appendChild(h2El);
        passwordEl.style.border = '1px solid red';
    } else {
        boxEl.removeChild(h2El);
        passwordEl.style.border = '2px solid green';
    }
});