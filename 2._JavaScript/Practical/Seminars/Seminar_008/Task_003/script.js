/* Задание 3 (тайминг 30 минут)
1 Создать кнопку, которая добавляем заголовок h1 с текстом,
“Новый заголовок, данный элемент нужно расположить
после кнопки
2 Создать вторую кнопку, которая будет удалять созданный
заголовок h1
3 Создать третью кнопку, при наведении на которую в
консоль будет выводиться текст “вы навели на данную
кнопку” , как только вы убираем курсор мыши с кнопки, в
консоли должен появиться текст “Наведения на кнопку
больше нет” */


const btnAddEl = document.querySelector('.button-add');
const btnDelEl = document.querySelector('.button-del');
const btnHoverEl = document.querySelector('.button-hover');


// 1
const h1El = document.createElement('h1');
h1El.textContent = 'Новый заголовок';

btnAddEl.addEventListener('click', function (e) {
    btnAddEl.parentElement.appendChild(h1El);
});


// 2
btnDelEl.addEventListener('click', function (e) {
    btnDelEl.parentElement.removeChild(h1El);
});


// 3
btnHoverEl.addEventListener('mouseover', function (e) {
    console.log('вы навели на данную кнопку');
});

btnHoverEl.addEventListener('mouseout', function (e) {
    console.log('Наведения на кнопку больше нет');
});