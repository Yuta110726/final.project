// slideshow.js
let slideIndex = 0;
let autoplayTimer = null;

document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex);
    startAutoplay();
});

function plusSlides (n) {
    stopAutoplay();
    showSlides(slideIndex += n);
    startAutoplay();
}

function currentSlide(n) { // 統一命名為 currentSlide
    stopAutoplay();
    showSlides(slideIndex = n);
    startAutoplay();
}

function showSlides(n){
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n >= slides.length){
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i=0; i<dots.length; i++){
        dots[i].classList.remove("active"); // 使用 classList.remove
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active"); // 使用 classList.add
}

function startAutoplay() {
    stopAutoplay(); // 清除現有計時器，避免重複啟動
    autoplayTimer = setTimeout(() => {
        slideIndex++;
        showSlides(slideIndex);
        startAutoplay(); // 循環自動播放
    }, 2000); // 自動播放間隔調整為 2秒
}

function stopAutoplay() {
    clearTimeout(autoplayTimer);
}
