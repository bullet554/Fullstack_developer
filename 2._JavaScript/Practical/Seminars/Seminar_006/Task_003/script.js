/* Задание 3 (тайминг 20 минут)
1 Дан тег <div class="content"></div>
2 Создайте новый элемент p
3 Добавьте в него текст “Новый текстовый элемент”
4 Добавьте созданный элемент внутри <div
class="content"></div>
5 Удалите добавленный узел */


const pEl = document.createElement('p');
pEl.textContent = 'Новый текстовый элемент';

const contentEl = document.querySelector('.content');
contentEl.appendChild(pEl);

contentEl.removeChild(pEl);