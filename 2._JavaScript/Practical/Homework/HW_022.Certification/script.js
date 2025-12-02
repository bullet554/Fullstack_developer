addBtn.addEventListener('click', function () {
    let productName = inputName.value;
    let productReview = inputReview.value;

    if (productName === '' || productReview === '') {
        alert('Необходимо заполнить все поля');
        return;
    }

    saveToStorage(productName, productReview);

    savingReviewToList(productName, productReview);

    inputName.value = '';
    inputReview.value = '';
});

function saveToStorage(name, review) {
    let reviews = JSON.parse(localStorage.getItem(name)) || [];

    reviews.push(review);

    localStorage.setItem(name, JSON.stringify(reviews));
}


function savingReviewToList(name, review) {
    const productsNames = document.querySelectorAll('.product-card__name');
    const existingProduct = Array.from(productsNames).find(
        e => e.textContent === name
    );

    if (existingProduct) {
        const productCard = existingProduct.closest('.product-card');
        const reviewParagraph = document.createElement('p');
        const deleteBtn = document.createElement('button');

        reviewParagraph.classList.add('product-card__review', 'hidden');
        reviewParagraph.textContent = review;

        deleteBtn.classList.add('delete-button');
        deleteBtn.textContent = 'Удалить';

        deleteBtn.addEventListener('click', function (e) {
            reviewParagraph.remove();

            const reviews = JSON.parse(localStorage.getItem(name)) || [];
            const updatedReviews = reviews.filter(e => e !== review);

            if (updatedReviews.length > 0) {
                localStorage.setItem(name, JSON.stringify(updatedReviews));
            } else {
                localStorage.removeItem(name);
            }
        });

        existingProduct.addEventListener('click', function () {
            reviewParagraph.classList.toggle('hidden');
        });

        productCard.appendChild(reviewParagraph);
        reviewParagraph.appendChild(document.createTextNode(' '));
        reviewParagraph.appendChild(deleteBtn);

    } else {
        const productCard = document.createElement('div');

        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <h2 class="product-card__name">${name}</h2>
            <p class="product-card__review hidden">
            ${review}
            <button class="delete-button">Удалить</button>
            </p>
        `;

        const newDeleteBtn = productCard.querySelector('.delete-button');
        newDeleteBtn.addEventListener('click', function () {
            const reviewParagraph = newDeleteBtn.parentNode;
            const reviewText = reviewParagraph.textContent
                .replace(newDeleteBtn.textContent, '')
                .trim();

            const reviews = JSON.parse(localStorage.getItem(name) || []);
            const updatedReviews = reviews.filter(e => e.trim() !== reviewText.trim());

            if (updatedReviews.length > 0) {
                localStorage.setItem(name, JSON.stringify(updatedReviews));
            } else {
                localStorage.removeItem(name);
            }

            reviewParagraph.remove();

            if (updatedReviews.length === 0) {
                productCard.remove();
            }
        });

        const productNameElement = productCard.querySelector('.product-card__name');
        productNameElement.addEventListener('click', function () {
            const reviewElement = productCard.querySelector('.product-card__review');
            reviewElement.classList.toggle('hidden');
        });

        productList.appendChild(productCard);
    }
}

function loadFromStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key !== 'some-other-key') {
            const reviews = JSON.parse(localStorage.getItem(key));

            reviews.forEach(review => {
                savingReviewToList(key, review);
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', loadFromStorage);