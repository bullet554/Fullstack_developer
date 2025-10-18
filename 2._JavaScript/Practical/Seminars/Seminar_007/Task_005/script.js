/* Задание 5 (тайминг 20 минут)
1 Дан тег <div class="content"></div>
2 Создайте с помощью javascript новый элемент button
3 Добавьте текст для кнопки “Отправить”
4 При клике на данную кнопку необходимо чтобы текст
поменялся на “Текст отправлен” */


const contentEl = document.querySelector('.content');

const btnEl = document.createElement('button');
btnEl.textContent = 'Отправить';
contentEl.appendChild(btnEl);

btnEl.onclick = function () {
    btnEl.textContent = 'Текст отправлен';
}