/* Задание 2 (тайминг 15 минут)
1 Дан тег <a class="link" href="#">link text html</a>
a. Вам необходимо поменять текст внутри ссылки на “link
text js”
b. Заменить href, на значение
https://developer.mozilla.org/ru/
2 Дан тег <img class="photo" src="" alt="">
a. Вам необходимо с помощью js поменять значение src на
любое изображение из интернета */


// 1
// a
const linkEl = document.querySelector('.link');
linkEl.textContent = 'link text js';

//b
linkEl.href = 'https://developer.mozilla.org/ru/';

console.log(linkEl.href);



// 2
const imgEl = document.querySelector('.photo');
imgEl.scr = 'https://yandex.ru/images/search?img_url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F5NkR6WRY1dI%2Fmaxresdefault.jpg&lr=213&pos=0&rpt=simage&source=serp&text=heroes%20of%20newerth%20reborn%20дата%20выхода';

console.log(imgEl.scr);