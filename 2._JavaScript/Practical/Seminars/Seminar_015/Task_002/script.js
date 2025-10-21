/* Задание 2 (тайминг 30 минут)
Создайте класс Animal, который будет представлять животное. У
класса Animal должны быть следующие свойства и методы:
    ● Свойство name (строка) - имя животного.
    ● Метод speak() - выводит в консоль звук, издаваемый животным.
Создайте подкласс Dog, который наследует класс Animal. Для
подкласса Dog добавьте дополнительное свойство и метод:
    ● Свойство breed (строка) - порода собаки.
    ● Метод fetch() - выводит в консоль сообщение "Собака [name]
      принесла мяч.". 
      
const animal1 = new Animal("Животное");
animal1.speak(); // Вывод: Животное издает звук.

const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak(); // Вывод: Животное Бобик издает звук.
console.log(dog1.breed); // Вывод: Дворняжка
dog1.fetch(); // Вывод: Собака Бобик принесла мяч.
*/


class Animal {
    constructor(name) {
        this.name = name;
    };

    speak() {
        console.log(`Животное ${this.name} издает звук.`);
    }
};

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    };

    fetch() {
        console.log(`Собака ${this.name} принесла мяч.`);
    }
};

const animal1 = new Animal("Собака");
animal1.speak(); // Вывод: Животное издает звук.

const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak(); // Вывод: Животное Бобик издает звук.
console.log(dog1.breed); // Вывод: Дворняжка
dog1.fetch(); // Вывод: Собака Бобик принесла мяч.