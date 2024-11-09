let currentIndex = 0;

function moveLeft() {
    const images = document.querySelector('.carousel-images');
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : 2;
    images.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveRight() {
    const images = document.querySelector('.carousel-images');
    currentIndex = (currentIndex < 2) ? currentIndex + 1 : 0;
    images.style.transform = `translateX(-${currentIndex * 100}%)`;
}
