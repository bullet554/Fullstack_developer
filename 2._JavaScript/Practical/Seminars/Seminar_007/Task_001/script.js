/* Задание 1 (тайминг 25 минут)
<div class="block">
</div>
1 Дан блок, внутри него необходимо создать
элемент div с классом item, разместить текст
“Элемент внутри” и задать стили
● Цвет текста синий
● Рамка сплошная черная
● Цвет фона #f8f8f8
● Внутренний отступ 16px
1 Добавить данному блоку класс item_1
(использовать setAttribute) */


const blockEl = document.querySelector('.block');

const itemEl = document.createElement('div');
itemEl.classList.add('item');
itemEl.style.color = 'blue';
itemEl.style.border = '1px solid black';
itemEl.style.backgroundColor = 'f8f8f8';
itemEl.style.padding = '16px';
itemEl.setAttribute('class', 'item item_1');
blockEl.appendChild(itemEl);

const textEl = document.createElement('p');
textEl.textContent = 'Элемент внутри';
itemEl.appendChild(textEl);