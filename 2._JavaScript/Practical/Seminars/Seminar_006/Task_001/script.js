/* Задание 1 (тайминг 10 минут)
<div id="block">
<p>1</p>
<p>2</p>
</div>
1 Получите ссылку на первый абзац из дива с id,
равным block, выведите его в консоль
2 Получите ссылку на первый абзац с классом www.
и вывести его в консоль
<p class="www">text 1</p>
<p class="www">text 2</p> */


// 1
// option 1
/* const block = document.getElementById('block');
const firstPEl = block.querySelector('p'); */

// option 2
const firstPEl = document.querySelector('#block p:first-child');

console.log(firstPEl);


// 2
const pEl = document.querySelectorAll('.www:first-of-type');

const firstP = pEl[0];
console.log(firstP);