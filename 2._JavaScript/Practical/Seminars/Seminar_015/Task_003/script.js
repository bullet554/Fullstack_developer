/* Задание 3 (тайминг 40 минут)
Создайте класс Product, который будет предстовлять товар в магащине.
У товара должны быть следующие свойства:
    ● name (строка) - имя товара;
    ● price (число) - цена товара за одну еденицу.

Создайте класс ShoppingCart, представляюший корзину интернет-магазина.
Конструктор класса ShoppingCart должен принимать два параметра:
    ● customerName (строка) - имя покупателя;
    ● initialTotalCost (число) - начальная общая стоимость заказа
      (может быть равна 0, если корзина пуста).

У класса ShoppingCart должен быть метод addItem(product, quantity), 
который позволяет добавить товар в корзину. Метод должен принимать 
два параметра:
    ● product (объект класса Product) — товар, который добавляется в корзину.
    ● quantity (число, по умолчанию 1) — количество единиц товара, 
      которое нужно добавить в корзину. Если quantity не указано, 
      считается, что добавляется одна единица товара.

У класса ShoppingCart должен быть метод getCurrentTotalCost(), который 
возвращает текущую общую стоимость заказа.

У класса ShoppingCart должен быть метод checkout(), который оформляет 
заказ и выводит сообщение с общей стоимостью заказа и благодарностью 
за покупку.

Формат вывода сообщения:
"Заказ оформлен для {имя покупателя}. Общая стоимость заказа: 
{общая стоимость} рублей. Спасибо за покупку!"
*/


// Класс Product для представления товара
class Product {
    constructor(name, price) {
        this.name = name;   // название товара
        this.price = price; // цена за единицу
    };
};

// Класс ShoppingCart для корзины покупок
class ShoppingCart {
    constructor(customerName, initialTotalCost = 0) {
        this.customerName = customerName;    // имя покупателя
        this.totalCost = initialTotalCost;   // начальная сумма заказа
        this.productsCart = [];              // объект для хранения товаров
    };

    // Метод для добавления товара в корзину
    addItem(product, quantity = 1) {
        // Проверяем, есть ли товар уже в корзине
        if (this.productsCart.hasOwnProperty(product.name)) {
            this.productsCart[product.name].quantity += quantity;
        } else {
            this.productsCart[product.name] = {
                price: product.price,
                quantity: quantity
            };
        };

        // Обновляем общую стоимость
        this.totalCost += product.price * quantity;
    };

    // Метод для получения текущей общей стоимости
    getCurrentTotalCost() {
        return this.totalCost;
    };

    // Метод оформления заказа
    checkout() {
        console.log(`Заказ офрмлен для ${this.customerName}.`)
        console.log(`Общая стоимость заказа ${this.totalCost} рублей.`);
        console.log(`Спасибо за покупку!`);
        console.log('');
    };
};

// Пример использования:
// Создаем товары
const product1 = new Product('iPhone Air 256Gb Sky Blue, без RuStore', 87519);
const product2 = new Product('AirPors 4 ANC', 19159);

// Создаем корзину для покупателя
const cart = new ShoppingCart('Илья');  // Значение initialTotalCost можно не передавать, так как оно изначально равно 0

// Добавляем товары в корзину
cart.addItem(product1);         // добавляем 1 смартфона
cart.addItem(product2, 2);      // добавляем 2 наушники

// Проверяем текущую стоимость
console.log(`Текущая стоимоть заказа: ${cart.getCurrentTotalCost()} рублей.`);

// Оформляем заказ
cart.checkout();