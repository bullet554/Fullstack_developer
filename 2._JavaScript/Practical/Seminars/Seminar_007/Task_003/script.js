/* Задание 3 (тайминг 20 минут)
<div class="item">
<div class="elem">
<div class="info">
<h2 class="subtitle">Lorem, ipsum dolor.</h2>
</div>
</div>
</div>
С помощью querySelector найти элемент h2 и вывести в
консоль всех его родителей */


const element = document.querySelector('.subtitle');
printAllParents(element);


function printAllParents(element) {
    if (element && element.parentElement) {
        console.log(element.parentElement);
        printAllParents(element.parentElement);
    }
}