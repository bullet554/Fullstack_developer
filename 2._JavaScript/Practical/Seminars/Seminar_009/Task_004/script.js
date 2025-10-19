/* Задание 4 (тайминг 20 минут)
1 Создать поле ввода и под ним заголовок h1 с текстом
“Заголовок”
2 При вводе текста в поле ввода необходимо чтобы текст
внутри заголовка менятся на введенный в поле ввода */


const inputEl = document.querySelector('.input');
const textEl = document.querySelector('.text');

inputEl.addEventListener('input', function (e) {
    textEl.textContent = inputEl.value;
});