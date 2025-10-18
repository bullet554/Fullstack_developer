/* Задание 1 (тайминг 15 минут)
1 В html создать кнопку button
2 После загрузки страницы вывести в консоль текст
“страница загрузилась”
3 Добавить событие onclick которое выводит в
консоль текст “событие onclick”
4 Добавить событие addEventListener которое
выводит в консоль текст “событие
addEventListener” */


// 2
window.addEventListener('load', function () {
    console.log('страница загрузилась');
});


// 3
const btnEls = document.querySelector('.button');
btnEls.onclick = function () {
    console.log('событие onclick');
}


// 4
btnEls.addEventListener('click', function () { console.log('событие addEventListener') });