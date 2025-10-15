/* Задание 4
Описание задачи:
1. Выведите в консоль массив продуктов, у которых есть хотя бы одна
фотография, используя метод filter.
2. Отсортируйте массив products по цене в порядке возрастания и выведите
отсортированный массив в консоль. */


const products = [
    {
        id: 3,
        price: 127,
        photos: ["1.jpg", "2.jpg"],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: ["3.jpg"],
    },
    {
        id: 8,
        price: 78,
    },
];


// 1
const productWithPhoto = products.filter(product => {
    return product.photos && product.photos.length > 0;
});

console.log(productWithPhoto);


// 2
const sortedProducts = products.sort((a, b) => {
    return a.price - b.price;
});

console.log(sortedProducts);