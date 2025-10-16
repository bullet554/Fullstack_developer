/* Задачи:
1. Найдите элемент по id, используя getElementById, элемент с id равным
"super_link" и выведите этот элемент в консоль.
2. Внутри всех элементов на странице, которые имеют класс card-link,
поменяйте текст внутри элемента на "ссылка".
3. Найдите все элементы на странице с классом card-link, которые лежат в
элементе с классом card-body, и выведите полученную коллекцию в консоль.
4. Найдите первый попавшийся элемент на странице, у которого есть атрибут
data-number со значением 50, и выведите его в консоль.
5. Выведите содержимое тега title в консоль.
6. Получите элемент с классом card-title и выведите его родительский узел в
консоль.
7. Создайте тег <p>, запишите внутри него текст "Привет" и добавьте созданный
тег в начало элемента, который имеет класс card.
8. Удалите тег h6 на странице. */


// 1
const suoerLinkId = document.getElementById("super_link");

if (suoerLinkId) {
    console.log('Задание 1: ', suoerLinkId);
} else {
    console.error('Элемент с таким id не найден');
};


// 2
const editLinks = document.querySelectorAll('.card-link');

editLinks.forEach(link => {
    link.textContent = 'ссылка';
});

console.log('Задание 2: ', editLinks);


// 3
const cardBodyLinks = document.querySelectorAll('.card-body .card-link');

console.log('Задание 3: ', cardBodyLinks);


// 4
const firstDataNum = document.querySelector('[data-number="50"]');

console.log('Задание 4: ', firstDataNum);


// 5
console.log('Задание 5: ', document.querySelector('title'));


// 6
const cardTitle = document.querySelector('.card-title');

if (cardTitle) {
    const parentCadrTitle = cardTitle.parentNode;
    console.log('Задание 6: ', parentCadrTitle);
} else {
    console.error('Элемент с классом card-title не найден');
};


// 7
const cardClass = document.querySelector('.card');
const newParagraph = document.createElement('p');

newParagraph.textContent = 'Привет';
newParagraph.className = 'task-7';
cardClass.insertBefore(newParagraph, cardClass.firstChild);


// 8
const tagDel = document.querySelector('h6');

if (tagDel) {
    tagDel.remove();
}