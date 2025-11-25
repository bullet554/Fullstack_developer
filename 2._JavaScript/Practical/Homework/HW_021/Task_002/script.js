/* Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять 
отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете 
установить некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и 
контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина
 введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не 
заменять их.
 */

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

initialData.forEach(element => {
    const productCard = document.createElement('div');
    productCard.classList.add('product');

    productCard.innerHTML = `
        <h2 class="product-name">${element.product}</h2>
        <div class="product-reviews">
            <h3>Отзывы:</h3>
            <div class="reviews-list"></div>
            <div class="feedback">
                <textarea class="feedback__input" placeholder="Напишите ваш отзыв"></textarea>
                <button class="feedback__btn">Отправить</button>
            </div>
        </div>
    `;

    const reviewsList = productCard.querySelector('.reviews-list');

    element.reviews.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        reviewItem.innerHTML = `<p>${review.text}</p>`;
        reviewsList.appendChild(reviewItem);
    });

    const btn = productCard.querySelector('.feedback__btn');
    const textarea = productCard.querySelector('.feedback__input');

    function addReview(reviewText) {
        if (reviewText.length < 50) {
            throw new Error('Отзыв должен содержать минимум 50 символов');
        }
        if (reviewText.length > 500) {
            throw new Error('Отзыв не может превышать 500 символов');
        }

        const newReview = document.createElement('div');
        newReview.classList.add('review-item');
        newReview.innerHTML = `<p>${reviewText}</p>`;
        reviewsList.appendChild(newReview);
    }

    btn.addEventListener('click', () => {
        try {
            const newReviewText = textarea.value.trim();

            if (!newReviewText) {
                throw new Error('Пожалуйста, введите текст отзыва');
            }

            addReview(newReviewText);
            textarea.value = '';
        } catch (error) {
            alert(error.message);
        }
    });

    container.appendChild(productCard);
});