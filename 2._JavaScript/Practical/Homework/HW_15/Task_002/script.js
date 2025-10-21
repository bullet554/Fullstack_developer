/* Задание 2: "Управление списком заказов"
Реализуйте классы для управления продуктами и заказами:

Класс Product (Продукт)
    ● Свойства:
        ○ name (название) — строка, представляющая название продукта.
        ○ price (цена) — число, представляющее стоимость продукта.

Класс Order (Заказ)
    ● Свойства:
        ○ orderNumber (номер заказа) — число, уникальный номер заказа.
        ○ products (продукты) — массив, содержащий список продуктов в заказе.
    ● Методы:
        ○ addProduct(product) — метод, который принимает объект product и
          добавляет его в список продуктов заказа.
        ○ getTotalPrice() — метод, который возвращает общую стоимость
          заказа, основанную на ценах продуктов.

Пример использования класса
const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600
*/


class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    getTotalPrice() {
        return this.products.reduce((total, product) => {
            return total + product.price;
        }, 0)
    }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600