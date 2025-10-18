/* Задание 4 (тайминг 30 минут)
1 Создать в html список состоящий из 3-х произвольных
элементов li
2 Нужно создать кнопку которая будет добавлять элементы
списка с текстом “новый элемент списка”
3 Создать кнопку, которая будет удалять первый элемент из
созданного списка
4 Создать кнопку, при клике на которую ей добавляется класс
“click” */


const btnAddEl = document.querySelector('.button-add');
const btnDelEl = document.querySelector('.button-del');
const btnEl = document.querySelector('.button');
const ulEl = document.querySelector('.list');


// 2
btnAddEl.addEventListener('click', function (e) {
    const liEl = document.createElement('li');
    liEl.textContent = 'новый элемент списка';
    liEl.classList.add('item');
    ulEl.appendChild(liEl);
});


// 3
btnDelEl.addEventListener('click', function (e) {
    const listFirstEl = document.querySelector('.item:first-child');
    ulEl.removeChild(listFirstEl);
});


// 4
btnEl.addEventListener('click', function (e) {
    btnEl.classList.add('click');
    console.log(btnEl);
});