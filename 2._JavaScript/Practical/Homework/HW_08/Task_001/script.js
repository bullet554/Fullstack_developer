/* Задачи:
1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все
теги будут созданы браузером.
2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все
ресурсы страницы будут загружены.
3. При клике на какой-либо тег на странице в консоль должно выводиться
сообщение следующего вида:
○ Класс "super_element" присутствует в элементе "div".
○ Сообщение должно определять присутствует ли класс "super_element" у
элемента и выводить в нижнем регистре верный тег в данной строке, по
которому был совершен клик.
○ Необходимо использовать делегирование.
4. Сделайте так, чтобы при наведении на <textarea> в консоли появлялось
сообщение: "Вы навели на textarea."
5. Необходимо повесить событие клика на тег <ul>. В обработчике события в
консоль выводите текст, который записан внутри элемента кнопки, по которой
был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно.
Необходимо использовать делегирование.
6. Вопрос: Почему в console.log сначала пишется текст из 5 задания и только
потом текст из 3 задания, если мы кликаем по кнопкам в <ul>? Ответ
необходимо написать здесь же, под этим комментарием, своими словами.
7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега
<li>. */


// 1
document.addEventListener("DOMContentLoaded", function (e) {
    console.log('все теги прогрузились');
});


// 2
window.addEventListener('load', function (e) {
    console.log('страница загрузилась');
});


// 3
document.addEventListener('click', function (e) {
    const target = e.target;
    const hasClass = target.classList.contains('super_element');
    const tagName = target.tagName.toLowerCase();

    if (hasClass) {
        console.log(`Класс "super_element" присутствует в элементе "${tagName}".`);
    } else {
        console.log(`Класс "super_element" отсутствует в элементе "${tagName}".`);
    }
});


// 4
const hoverEl = document.querySelector('textarea');
hoverEl.addEventListener('mouseover', function (e) {
    console.log('Вы навели на textarea.');
});


// 5
const ulEl = document.querySelector('ul');

ulEl.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        console.log(e.target.textContent);
    }
});


// 6
/*  При клике на кнопке в <ul>, сначала выводится текст из 5
задания, потому что события обрабатываются в порядке их добавления,
а событие клика на <ul> происходит до того, как событие нажатия на
кнопку внутри <ul> будет полностью обработано. Поэтому текст из 5
задания выводится раньше.
 */


// 7
const liEl = document.querySelectorAll('li');

liEl.forEach((li, i) => {
    if (i % 2 === 1) {
        li.style.backgroundColor = 'lightblue';
    }
});
