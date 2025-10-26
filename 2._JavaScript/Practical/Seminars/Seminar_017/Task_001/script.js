/* Задание 1 (тайминг 30 минут)
Работа с BOM
1. Определение текущего размера окна браузера:
    ○ Напишите функцию, которая будет выводить текущую
      ширину и высоту окна браузера при его изменении.
2. Подтверждение закрытия страницы:
    ○ Создайте всплывающее окно или диалоговое окно,
      которое появляется при попытке закрыть вкладку
      браузера и спрашивает пользователя, уверен ли он в
      своем решении закрыть страницу.
3. Управление историей переходов:
    ○ Используйте объект history для управления историей
      переходов на веб-странице. Создайте кнопки "Назад" и
      "Вперед" для перемещения по истории. */


// 1
const updateWindowSize = () => {
    const widthEl = window.innerWidth;
    const heightEl = window.innerHeight;

    const windowSizeElement = document.querySelectorAll('.window-size');

    width.textContent = widthEl;
    height.textContent = heightEl;
}

window.addEventListener('load', updateWindowSize);
window.addEventListener('resize', updateWindowSize);


// 2
window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = 'Text';
});

// 3
goBack.addEventListener('click', function (e) {
    window.history.back();
});

goForward.addEventListener('click', function (e) {
    window.history.forward();
});