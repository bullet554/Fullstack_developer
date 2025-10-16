/* Задание 5 (тайминг 20 минут)
1 Дан тег <div class="content"></div>
2 Создайте с помощью javascript новый элемент button
3 Добавьте текст для кнопки “Отправить”
4 При клике на данную кнопку необходимо чтобы текст
поменялся на “Текст отправлен” */


const contentDiv = document.querySelector('.content');
const buttonEl = document.createElement('button');
buttonEl.textContent = 'Отправить';

contentDiv.appendChild(buttonEl);

buttonEl.onclick = () => {
    if (countClicks === 1) {
        buttonEl.textContent = 'Текст отправлен';
    }
};