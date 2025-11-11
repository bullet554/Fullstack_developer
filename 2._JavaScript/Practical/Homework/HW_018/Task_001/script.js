/* Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице. 
Слайдер должен позволять переключаться между изображениями и отображать их в центре экрана.

1. Создайте интерфейс веб-страницы, который включает в себя следующие элементы:
    a. Контейнер для отображения текущего изображения.
    b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
    c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

2. Используйте HTML для создания элементов интерфейса.

3. Используйте JavaScript для обработки событий:
    a. При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
    b. При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
    c. При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

4. Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения 
   должно отображаться первое, и наоборот.

5. Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения 
   внешнего вида. */


document.addEventListener('DOMContentLoaded', () => {
    const sliderImages = document.querySelectorAll('.slider-image');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    const totalSlides = sliderImages.length;

    function showSlide(index) {
        currentSlide = index % totalSlides;
        if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        }

        sliderImages.forEach(img => img.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        sliderImages[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    showSlide(currentSlide);
});
