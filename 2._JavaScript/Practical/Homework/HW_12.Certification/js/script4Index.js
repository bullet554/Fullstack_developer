const productsDataIndex = JSON.parse(dataIndexJSON);
const productBox = document.querySelector('.product__items');

productsDataIndex.forEach(productData => {
    const productEl = document.createElement('div');
    productEl.classList.add('product__item');

    const productImgWrapper = document.createElement('div');
    productImgWrapper.classList.add('product__image-wrapper');

    const productImg = document.createElement('img');
    productImg.classList.add('product__img');
    productImg.setAttribute('alt', 'Product image');
    productImg.src = productData.img;

    const productBtnAdd = document.createElement('button');
    productBtnAdd.classList.add('product__add');
    productBtnAdd.textContent = 'Add to Cart';

    const productContent = document.createElement('div');
    productContent.classList.add('product__content');

    const productName = document.createElement('a');
    productName.classList.add('product__name');
    productName.textContent = productData.name;
    productName.href = 'product.html';

    const productInfo = document.createElement('p');
    productInfo.classList.add('product__info');
    productInfo.textContent = productData.info;

    const productPrice = document.createElement('p');
    productPrice.classList.add('product__price');
    productPrice.textContent = productData.price;

    productBox.appendChild(productEl);
    productEl.appendChild(productImgWrapper);
    productImgWrapper.appendChild(productImg);
    productImgWrapper.appendChild(productBtnAdd);
    productEl.appendChild(productContent);
    productContent.appendChild(productName);
    productContent.appendChild(productInfo);
    productContent.appendChild(productPrice);

});

document.addEventListener('DOMContentLoaded', () => {
    // Получаем все кнопки "Add to Cart"
    const addToCartButtons = document.querySelectorAll('.product__add');

    // Обработчик клика
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Находим карточку товара, к которой относится кнопка
            const productCard = e.target.closest('.product__item');

            // Собираем данные товара
            const productData = {
                id: Date.now() + Math.random().toString(36).substr(2, 9), // Уникальный ID
                name: productCard.querySelector('.product__name').textContent,
                price: productCard.querySelector('.product__price').textContent,
                img: productCard.querySelector('.product__img').src
            };

            // Получаем текущую корзину из localStorage
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Добавляем товар
            cart.push(productData);

            // Сохраняем в localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Переходим на страницу корзины
            window.location.href = 'cart.html';
        });
    });
});
