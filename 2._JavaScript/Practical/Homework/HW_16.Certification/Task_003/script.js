/* Задание 3: "Изменение стиля элемента через заданное время"
Реализуйте функцию, которая изменяет стиль элемента с задержкой:

Функция changeStyleDelayed
    ● Описание:
        ○ Функция принимает идентификатор элемента (id) и время задержки в
          миллисекундах (delay).
        ○ После истечения времени задержки, функция должна изменить стиль
          элемента.

Пример использования функции
changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement' 
*/


function changeStyleDelayed (idEl, delay) {
    setTimeout(() => {
        const element = document.getElementById(idEl);
        if (element) {
            element.style.color = 'yellow';
            element.style.backgroundColor = 'blue';
        }
    }, delay);
}

changeStyleDelayed('myElement', 2000);