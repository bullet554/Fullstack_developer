/* Задание 2 (тайминг 25 минут)
Создать интерактивную веб-страницу, где пользователи могут вводить текст, сохранять его в localStorage,
а затем загружать или удалять сохраненные данные.
Разработка Интерфейса:
Создать HTML-страницу с:
● Одним текстовым полем для ввода данных пользователем.
● Тремя кнопками: "Сохранить", "Загрузить" и "Очистить".
● Местом для отображения сохраненного текста.
Программирование Логики на JavaScript:
1. При нажатии на "Сохранить", введенный текст должен сохраняться в localStorage.
2. При нажатии на "Загрузить", текст из localStorage должен отображаться на странице.
3. При нажатии на "Очистить", сохраненный текст должен быть удален из localStorage, и соответствующее
сообщение отображается на странице. */


saveBtn.addEventListener('click', function (e) {
    let inputText = input.value;
    localStorage.setItem('input', inputText);
    input.value = '';
});

loadBtn.addEventListener('click', function (e) {
    let inputText = localStorage.getItem('input');
    viewsText(inputText);
});

clearBtn.addEventListener('click', function (e) {
    localStorage.removeItem('input', input.value);
    containerViews.innerHTML = '';
});

function viewsText(params) {
    const localStorageViews = document.createElement('p');
    localStorageViews.innerHTML = `
        <p>${params}</p>
    `;
    containerViews.append(localStorageViews);
}