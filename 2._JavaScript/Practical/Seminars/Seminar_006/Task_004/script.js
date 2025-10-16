/* Задание 4 (тайминг 15 минут)
1 Создать элемент button, добавить в блок <div
class="content"></div>
2 При клике на который в консоль выводится сколько раз
пользователь нажал на данную кнопку */


const contentDiv = document.querySelector('.content');

const buttonEl = document.createElement('button');
buttonEl.textContent = 'Click';

contentDiv.appendChild(buttonEl);

let countClicks = 0;
buttonEl.onclick = () => {
    console.log(++countClicks);
};