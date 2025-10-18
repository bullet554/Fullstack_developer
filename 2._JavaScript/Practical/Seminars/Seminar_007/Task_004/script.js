/* Задание 4 (тайминг 25 минут)
<form action="#">
<input type="text">
<button class="btn">Отправить</button>
</form>
1 Дано поле ввода и кнопка отправить, необходим
реализовать функционал, если пользователь нажимает на
кнопку отправить, а поле ввода пустое, то под полем ввода
и кнопкой должен появиться заголовок h2 с текстом вы не
заполнили поле ввода
2 Цвет у рамки сделать красным */


const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.form__input');
const btnEl = document.querySelector('.btn');

const h2El = document.createElement('h2');
h2El.textContent = 'вы не заполнили поле ввода';

btnEl.onclick = function () {
    if (inputEl.value) {

    } else {
        formEl.appendChild(h2El);
        inputEl.style.border = '1px solid red';
    }
}