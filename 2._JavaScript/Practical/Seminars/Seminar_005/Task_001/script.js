/* Задание 1 (тайминг 20 минут)
Текст задания
1. Создайте объект с ключами от 1 до 7, в качестве
значений содержащий имена дней недели. Выведите на
экран “Вторник”
2. Создайте объект user с ключами 'name', 'surname', ‘age’.
Выведите на экран фамилию, имя и возраст через дефис.
3. Добавьте в объект user свойство отчество, которое
пользователь должен ввести с клавиатуры
4. Удалите свойство surname */


// 1
const weekday = {
    1: 'понедельник',
    2: 'вторник',
    3: 'среда',
    4: 'четверг',
    5: 'пятница',
    6: 'суббота',
    7: 'воскресенье'
};

// console.log(weekday[2]);


// 2
const user = {
    name: 'Илья',
    surname: 'Карпов',
    age: 32
}

// console.log(`${user.name}-${user.surname}-${user.age}`);


// 3

// option 1
/* const key = 'patronymic';
const newValue = prompt('Отчество:');
user[key] = newValue; */

// option 2
user.patronymic = prompt('Отчество:');

// console.log(user);


// 4
delete user['surname'];

// console.log(user);