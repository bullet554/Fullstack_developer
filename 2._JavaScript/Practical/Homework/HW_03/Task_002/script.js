function salary() {
    let number = Number(prompt('Какая Ваша ЗП?'));
    let isNumber = !isNaN(Number(number));

    if (isNumber === true) {
        console.log(`Размер заработной платы за вычетом налогов равен ${number * 0.87}`);
    } else {
        console.log('ОШИБКА! Введено не число!');
    }
}

salary();