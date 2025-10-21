/* Задание 2: "Управление списком студентов"
Реализуйте класс Student, который будет представлять студента с указанными ниже
свойствами и методами:
    ● Свойства:
        ○ name (имя) - строка, представляющая имя студента.
        ○ age (возраст) - число, представляющее возраст студента.
        ○ grade (класс) - строка, представляющая класс, в котором учится студент.
    ● Методы:
        ○ displayInfo() - метод, который выводит информацию о студенте в
          формате: Name: {name}, Age: {age}, Grade: {grade}.

Пример использования класса
const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();
// Вывод: Name: John Smith, Age: 16, Grade: 10th grade
const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();
// Вывод: Name: Jane Doe, Age: 17, Grade: 11th grade 
*/


class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    };

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}.`);
    };
};

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();
// Вывод: Name: John Smith, Age: 16, Grade: 10th grade
const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();
// Вывод: Name: Jane Doe, Age: 17, Grade: 11th grade 