/* Задание 1 (тайминг 20 минут)
1 В html создать элемент checkbox и текст рядом с
ним “Согласен с условиями”
2 Добавить кнопку отправить
3 При клике на кнопку отправить нужно проверять
выбран ли активным элемент checkbox
4 Если элемент не выбран, добавить текст под
чекбоксом “Необходимо согласиться с условиями” */


document.addEventListener('DOMContentLoaded', function (e) {

const boxArgee = document.querySelector('.content__agree');
const checkEl = boxArgee.querySelector('.check');
const btnEl = document.querySelector('.button');
const h2El = document.querySelector('.error');

btnEl.addEventListener('click', function (e) {
    if (checkEl.checked) {
        h2El.textContent =  '';
    } else {
        h2El.textContent = 'Необходимо согласиться с условиями';
    }
});

});