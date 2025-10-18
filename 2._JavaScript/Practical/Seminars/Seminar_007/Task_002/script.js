/* Задание 2 (тайминг 25 минут)
1 Дан код
<div class="elem">
<img src="photo.png" alt="photo">
<div class="content">
<h2 class="heading">Lorem, ipsum dolor.</h2>
<p class="text">Lorem ipsum, dolor sit amet consectetur
adipisicing elit. Recusandae, ea!</p>
</div>
</div>
Необходимо с помощью querySelector найти параграф с
классом text
2 Вывести в консоль соседний элемент h2
3 Вывести в консоль родительский элемент content
4 Вывести в консоль картинку
5 Вывести в консоль родительский элемент elem */

// 1
const textEl = document.querySelector('.text');

// 2
const h2El = textEl.parentElement.firstElementChild;

console.log(h2El);

// 3
console.log(textEl.parentElement);

// 4
// const imgEL = document.querySelector('img');
// console.log(imgEL);
console.log(textEl.parentElement.previousElementSibling);

// 5
console.log(textEl.parentElement.parentElement);