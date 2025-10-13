/* Задание 1 (тайминг 20 минут)
Текст задания
1. Написать функцию, которой передаем, имя, фамилия и
возраст, и получаем строку "Привет Иван Петров с
возрастом 17" (только здесь данные, которые были
переданы в функцию)
2. Создайте функцию которая возводит переданное число в
квадрат
3. Сделайте функцию, которая параметром принимает
число и проверяет, положительное это число или
отрицательное. В первом случае пусть функция выводит
в консоль текст '+++', а во втором '---'. */


// 1
function getDataUser() {
    let name = prompt('Ваше имя:');
    let surname = prompt('Ваше фамилия:');
    let age = Number(prompt('Ваш возраст:'))

    console.log(`Привет ${name} ${surname} с возрастом ${age}`);
    alert(`Привет ${name} ${surname} с возрастом ${age}`)
}

// getDataUser();


// 2
function squaring() {
    let number = Number(prompt('Скажи число:'));

    // number *= number

    alert(number ** 2);
}

squaring();


// 3
function checkSignNumber(number) {
    if (number > 0) {
        console.log('+++');
    } else if (number === 0) {
        console.log('===');
    } else {
        console.log('---');
    }
}

// checkSignNumber(0);