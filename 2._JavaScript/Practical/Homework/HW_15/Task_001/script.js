/* Задание 1: "Управление персоналом компании"
Реализуйте классы для управления сотрудниками компании:

Класс Employee (Сотрудник)
    ● Свойства:
        ○ name (имя) — строка, представляющая имя сотрудника.
    ● Методы:
        ○ displayInfo() — метод, который выводит информацию о сотруднике в
          формате: Name: {name}.

Класс Manager (Менеджер)
    ● Наследует: класс Employee.
    ● Дополнительные свойства:
        ○ department (отдел) — строка, представляющая отдел, в котором
          работает менеджер.
    ● Переопределенные методы:
        ○ displayInfo() — метод, который переопределяет метод displayInfo() 
          родительского класса и выводит информацию оменеджере в формате: 
          Name: {name}, Department: {department}.

Пример использования классов
const employee = new Employee("John Smith");
employee.displayInfo();
// Вывод: John Smith
const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();
// Вывод: Name: Jane Doe, Department: Sales 
*/


class Employee {
    constructor(name) {
        this.name = name;
    }

    displayInfo() {
        console.log(`Name: ${this.name}.`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Department: ${this.department}.`);
    }
}

const employee = new Employee("John Smith");
employee.displayInfo();
// Вывод: John Smith

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();
// Вывод: Name: Jane Doe, Department: Sales 
