// Получаем контейнер для размещения карточек
const container = document.querySelector('#container');

let productsData = [];

async function loadData() {
    try {
        // Загружаем данные из JSON
        const response = await fetch('data.json');
        productsData = await response.json();
        
        renderProducts(productsData);
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        alert('Произошла ошибка при загрузке данных');
    }
}

function renderProducts(products) {
    // Очистка контейнера
    container.innerHTML = '';

    products.forEach((element, index) => {
        // Создание карточки продукта
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

        function addReview(reviewText, productIndex) {
            if (reviewText.length < 50) {
                throw new Error('Отзыв должен содержать минимум 50 символов');
            }
            if (reviewText.length > 500) {
                throw new Error('Отзыв не может превышать 500 символов');
            }

            const newReview = {
                id: Date.now().toString(),
                text: reviewText
            };

            // Добавляем новый отзыв
            productsData[productIndex].reviews.push(newReview);

            // Сохраняем новый отзыв в DOM
            const newReviewElement = document.createElement('div');
            newReviewElement.classList.add('review-item');
            newReviewElement.innerHTML = `<p>${reviewText}</p>`;
            reviewsList.appendChild(newReviewElement);
        }

        btn.addEventListener('click', async () => {
            try {
                const newReviewText = textarea.value.trim();

                if (!newReviewText) {
                    throw new Error('Пожалуйста, введите текст отзыва');
                }

                // Передаем индекс продукта
                addReview(newReviewText, index);
                textarea.value = '';

                // Пытаемся сохранить изменения в data.json
                try {
                    const response = await fetch('data.json', {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(productsData)
                    });
                    
                    if (!response.ok) {
                        throw new Error('Ошибка при сохранении данных');
                    }
                } catch (error) {
                    console.error('Ошибка при сохранении данных:', error);
                    alert('Не удалось сохранить отзыв. Попробуйте позже.');
                }
            } catch (error) {
                alert(error.message);
            }
        });

        container.appendChild(productCard);
    });
}

// Запускаем загрузку данных при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
    loadData();
});
