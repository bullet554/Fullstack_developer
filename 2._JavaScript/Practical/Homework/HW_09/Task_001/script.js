/* Задачи:
1. При изменении значения в <input> с id="from", значение, содержащееся
    в нем, должно моментально отображаться в <span>.
        ○ Это значит, что при каждом изменении текста в инпуте, текст в <span>
    должен обновляться соответственно.
2. При клике на кнопку с классом messageBtn необходимо выполнить
    следующие действия для элемента с классом message:
        ○ Добавить два класса: animate_animated и animate_fadeInLeftBig.
        ○ Установить стиль visibility в значение 'visible'.
3. При отправке формы проверьте, заполнены ли все поля.
        ○ Если какое-либо поле не заполнено, форма не должна отправляться.
        ○ Незаполненные поля должны быть подсвечены (добавлен класс error).
        ○ Как только пользователь начинает заполнять поле, выполните проверку:
            ■ Если поле пустое, подсветите его (добавьте класс error).
            ■ Если поле заполнено, уберите подсветку (удалите класс error).
 */


document.addEventListener('DOMContentLoaded', function () {
    // 1
    const inputEl = document.getElementById('from');
    const textEl = document.querySelector('.dynamicText');

    inputEl.onkeyup = function () { textEl.innerHTML = this.value; };


    // 2
    const messageBtn = document.querySelector('.messageBtn');
    const messageEl = document.querySelector('.message');

    messageBtn.addEventListener('click', function (e) {
        messageEl.classList.add('animate_animated', 'animate_fadeInLeftBig');
        messageEl.style.visibility = 'visible';
    });


    // 3
    const form = document.querySelector('.form');
    const inputEls = document.querySelectorAll('.form-control');
    
    function validateFields() { // Функция проверки всех полей
        let isValid = true;

        inputEls.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('error');
                isValid = false;
            } else {
                input.classList.remove('error');
            }
        });

        return isValid;
    };

    form.addEventListener('submit', function (e) { // Проверка при отправке формы
        if (!validateFields()) {
            e.preventDefault(); // Блокируем отправку
        }
    });

    inputEls.forEach(input => { // Динамическая проверка при вводе/изменении
        input.addEventListener('input', validateFields);
        input.addEventListener('change', validateFields); // Для select
    });

});
