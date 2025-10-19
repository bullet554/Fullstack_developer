/*  1. Получите данные по адресу https://fakestoreapi.com/products.
    2. Создайте файл data.js.
    3. В файле data.js создайте переменную dataJSON, которая будет
       хранить эти данные в формате JSON.
    4. Создайте вторую переменную data, в которой сохраните данные в
       формате массива на основе dataJSON.
    5. Создайте файл index.html.
    6. Подключите data.js в index.html.
    7. Сформируйте контент из данных (картинка, заголовок, описание,
       цена и кнопка “Add to Cart”).
    8. Добавьте данный контент в верстку в виде списка ul и li.
    9. Добавьте стили при необходимости (по желанию). */

const productsData = JSON.parse(dataJSON);

const productBox = document.getElementById('product-list');

productsData.forEach(productData => {

    const productEl = document.createElement('li');
    productEl.classList.add('product');

    const productImg = document.createElement('img');
    productImg.classList.add('product__img');
    productImg.setAttribute('alt', 'Product photo');
    productImg.src = productData.image;

    const productContent = document.createElement('div');
    productContent.classList.add('product__content');

    const productName = document.createElement('a');
    productName.classList.add('product__name');
    productName.href = 'product.html';
    productName.textContent = productData.title;

    const productInfo = document.createElement('p');
    productInfo.classList.add('product__info');
    productInfo.textContent = productData.description;

    const productPrice = document.createElement('p');
    productPrice.classList.add('product__price');
    productPrice.textContent = productData.price;

    const productButton = document.createElement('button');
    productButton.classList.add('product__button');
    productButton.textContent = 'Add to Cart';
    // productButtonEl.href = 'cart.html';

    productBox.appendChild(productEl);
    productEl.appendChild(productImg);
    productEl.appendChild(productContent);
    productContent.appendChild(productName);
    productContent.appendChild(productInfo);
    productContent.appendChild(productPrice);
    productEl.appendChild(productButton);

});