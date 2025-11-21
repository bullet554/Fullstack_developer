/* Задание 3 (тайминг 15 минут)
Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не являются стандартными
массивами, но похожи на них. Однако у таких коллекций нет методов массива, и здесь на помощь приходит
Array.from. В этом задании вы научитесь конвертировать коллекции DOM-элементов в массивы и работать
с ними. 
Напишите функцию, которая собирает все элементы <div> на странице, преобразует их в массив и
фильтрует только те из них, у которых есть атрибут data-active.
Выведите результат на консоль.
*/


function getDivElements() {
    const divCollection = document.getElementsByTagName('div');
    const divArray = Array.from(divCollection);

    const attributeDivs = divArray.filter(div => {
        return div.hasAttribute('data-active');
    });

    attributeDivs.forEach((div, index) => {
        console.log(`Элемент ${index + 1}: ${div.innerText}`);
    });
}

window.onload = getDivElements;