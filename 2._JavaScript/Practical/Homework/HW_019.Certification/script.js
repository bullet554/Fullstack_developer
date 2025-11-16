const UNSPLASH_API_KEY = 'RZ60A35V7uD3PxisTWp6ij0baFjrwGrTpSRIW5G2OtI';
const UNSPLASH_URL = 'https://api.unsplash.php/photos/random';

const photo = document.getElementById('photo');
const photographer = document.getElementById('photographer');
const likeButton = document.getElementById('like-button');
const likesCount = document.getElementById('likes-count');
const historyContainer = document.getElementById('history-container');

loadRandomPhoto();

let likes = parseInt(localStorage.getItem('likes')) || 0;
likesCount.innerText = likes;

likeButton.addEventListener('click', () => {
    likes++;
    likesCount.innerText = likes;
    localStorage.setItem('likes', likes);
});

async function loadRandomPhoto() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=9&client_id=RZ60A35V7uD3PxisTWp6ij0baFjrwGrTpSRIW5G2OtI`);
        const data = await response.json();

        photo.src = data.urls.regular;
        photographer.innerText = `Фотограф: ${data.user.name}`;

        saveToHistory(data);
    } catch (error) {
        console.error('Ошибка при загрузке фото:', error);
    }
}

function saveToHistory(photoData) {
    const historyItem = document.createElement('div');
    historyItem.classList.add('history-item');

    const img = document.createElement('img');
    img.src = photoData.urls.thumb;
    img.alt = 'Миниатюра';

    const author = document.createElement('p');
    author.innerText = photoData.user.name;

    historyItem.appendChild(img);
    historyItem.appendChild(author);

    historyContainer.appendChild(historyItem);
}