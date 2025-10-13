/* Задание 4 (тайминг 25 минут)
1. Сделайте функцию, которая принимает параметром число от 1 до 7,
а возвращает день недели на русском языке.
2. Написать функцию, которой передаем имя и она возвращает
приветствие в зависимости от времени суток (Доброе
утро\день\вечер\ночи Иван) */


// 1
function weekday(number) {
    switch (number) {
        case 1:
            console.log('понедельник');
            break;

        case 2:
            console.log('вторник');
            break;

        case 3:
            console.log('среда');
            break;

        case 4:
            console.log('четверг');
            break;

        case 5:
            console.log('пятница');
            break;

        case 6:
            console.log('суббота');
            break;

        case 7:
            console.log('воскресенье');
            break;

        default:
            console.log('Некорректное число!');
            break;
    }
}

// weekday(1);
// weekday(3);
// weekday(21);
// weekday(6);


// 2
function greetings() {
    let name = prompt('Ваше имя:');
    let time = new Date().getHours();

    if (0 <= time && time < 5) {
        console.log(`Доброй ночи, ${name}!`);
    } else if (5 <= time && time < 12) {
        console.log(`Доброе утро, ${name}!`);
    } else if (12 <= time && time < 18) {
        console.log(`Добрый день, ${name}!`);
    } else if (18 <= time && time < 24) {
        console.log(`Добрый вечер, ${name}!`);
    } else {
        console.log(`Ошибка определения времени, ${name}!`);
    }
}

// greetings();


