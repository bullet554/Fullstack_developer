/* Задание 2 (тайминг 25 минут)
1 В html создать 2 элемента радио кнопки (input
type=”radio”) и текст “Чай”, “Кофе”
соответственно
2 Кнопка отправить
3 Если выбран чай, необходимо вывести сообщение
“Чай закончился”
4 Если выбран кофе, необходимо вывести
соообщение “кофе закончился” */


const boxChoice = document.querySelector('.content__choice');
const choiceTeaEl = boxChoice.querySelector('.tea-check');
const choiceCoffeeEl = boxChoice.querySelector('.coffee-check');
const btnEl = document.querySelector('.button');
const h2El = document.querySelector('.content__answer');

btnEl.addEventListener('click', function (e) {
    if (choiceTeaEl.checked) {
        h2El.textContent = 'Чай закончился';
    } else {
        h2El.textContent = 'кофе закончился';
    }
});