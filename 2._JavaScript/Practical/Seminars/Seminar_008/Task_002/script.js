/* Задание 2 (тайминг 30 минут)
1 Создать в html три кнопки button с нумерацией (1, 2, 3
соответственно)
2 Добавить клик на кнопку , чтобы в консоль выводилась
именно та кнопка на которую мы нажали
3 Добавить кнопку button с текстом 4, которая считает
сколько раз на нее нажали и количество нажатий на эту
кнопку выводит в консоль
4 Создать кнопку button с текстом 5, При клике на которую,
меняется текст данной кнопки на “Вы нажали на эту
кнопку” */


// 2
const btnEls = document.querySelectorAll('.button');

btnEls.forEach(btn => {
    btn.addEventListener('click', function (e) {
        console.log(e.target);
    })
});


// 3
const btn4El = document.querySelector('.button-4');

let count = 0;
btn4El.addEventListener('click', function () {
    console.log(++count);
});


// 4
const btn5El = document.querySelector('.button-5');

btn5El.addEventListener('click', function () {
    btn5El.textContent = 'Вы нажали на эту кнопку';
});