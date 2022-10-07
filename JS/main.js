// Header
var header = document.querySelector(".header");
var header_logo = document.querySelector(".header__logo--image");
var headerHeight = header.style.height,
    logoHeight = header_logo.style.paddingTop;
document.onscroll = function () {
    if (window.scrollY >= 40) {
        header.style.height = 7 + "rem";
        header_logo.style.paddingTop = 5.5 + "rem";
    } else {
        header.style.height = headerHeight;
        header_logo.style.paddingTop = logoHeight;
    }
};

// Slider
var slide = document.querySelector(".slide");
var slideBtnNext = document.querySelector(".btn-next");
var slideBtnPrev = document.querySelector(".btn-prev");
var slideIndex = 0;

slideBtnNext.onclick = function () {
    slideIndex++;
    if (slideIndex == 1) {
        slide.style.marginLeft = "-100vw";
        console.log(slide.style.marginLeft);
    }
    if (slideIndex == 2) {
        slide.style.marginLeft = "-203vw";
        console.log(slide.style.marginLeft);
    }
    if (slideIndex == 3) {
        slide.style.marginLeft = "-301.5vw";
        console.log(slide.style.marginLeft);
    }
    if (slideIndex >= 4) {
        slide.style.marginLeft = "0vw";
        console.log(slide.style.marginLeft);
        slideIndex = 0;
    }
};
slideBtnPrev.onclick = function () {
    slideIndex--;
    if (slideIndex == 1) {
        slide.style.marginLeft = "-100vw";
        console.log(slide.style.marginLeft);
    }
    if (slideIndex == 2) {
        slide.style.marginLeft = "-203vw";
        console.log(slide.style.marginLeft);
    }
    if (slideIndex == 3) {
        slide.style.marginLeft = "-301.5vw";
        console.log(slide.style.marginLeft);
    }
    if (slideIndex <= 0) {
        slide.style.marginLeft = "0vw";
        console.log(slide.style.marginLeft);
        slideIndex = 4;
    }
};

// Photos
var videoBtn = document.querySelector(".video__btn");
var video = document.querySelector(".video video");

videoBtn.onclick = function () {
    videoBtn.style.display = "none";
    video.play();
};
video.onclick = function () {
    video.pause();
    videoBtn.style.display = "block";
};
