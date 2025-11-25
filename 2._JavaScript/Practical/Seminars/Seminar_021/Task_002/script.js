/* Задание 2 (тайминг 35 минут)
У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум-аккаунте, а
некоторые – нет.
Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о
наличии премиум-аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния
и instanceof.
    1. Создайте базовый класс User с базовой информацией (например, имя и фамилия).
    2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
       PremiumUser должен иметь свойство premiumAccount (допустим, дата истечения срока
       действия), а у RegularUser такого свойства нет.
    3. Создайте функцию getAccountInfo(user), которая принимает объект класса User и
       возвращает информацию о наличии и сроке действия премиум-аккаунта, используя
       Опциональную цепочку вызовов методов и оператор нулевого слияния.
    4. В функции getAccountInfo используйте instanceof для проверки типа переданного
       пользователя и дайте соответствующий ответ. */


class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

class PremiumUser extends User {
    constructor(name, surname) {
        super(name, surname);
        this.premiumAccount = null;
    }

    setPremiumAccount() {
        this.premiumAccount = new Date()
        this.premiumAccount.setFullYear(this.premiumAccount.getFullYear() + 1);
    }
}

class RegularUser extends User {
    constructor(name, surname) {
        super(name, surname);
    }
}

function getAccountInfo(user) {
    if (user instanceof PremiumUser) {
        const expirationDate = user.premiumAccount
            ? new Date(user.premiumAccount).toLocaleDateString()
            : 'Премиум-аккаунт не активирован';
        return `Пользователь: ${user.name} ${user.surname}\n` +
            `Премиум-аккаунт: ${user.premiumAccount ? 'Активен' : 'Не активен'}\n` +
            `Срок действия до: ${expirationDate}`;
    } else if (user instanceof RegularUser) {
        return `Пользователь: ${user.name} ${user.surname}\n` +
            `Премиум-аккаунт: Отсутствует`;
    } else {
        return `Тип пользователя не определен`
    }
}

const regular = new RegularUser('Вася', 'Иванов');
const premium = new PremiumUser('Оля', 'Олина');
premium.setPremiumAccount();
const premiumLim = new PremiumUser('Поля', 'Гагарина');

console.log(getAccountInfo(regular));
console.log(getAccountInfo(premium));
console.log(getAccountInfo(premiumLim));