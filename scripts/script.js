let slideIndex = [1, 1];
let slideId = ["carousel__slide-1", "carousel__slide-2"]
startCarousel(1, 0);
startCarousel(1, 1);

function changeSlide(n, no) {
    startCarousel(slideIndex[no] += n, no);
}

function startCarousel(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    let back = document.getElementsByClassName("main__wrapper_color_change");
    let header = document.getElementsByClassName("header");
    if (n > x.length) {slideIndex[no] = 1}
    if (slideIndex[0] === 1) {
        back[0].style.background = "#ffbf69";
        header[0].style.background = "#ffbf69";
    } else {
        back[0].style.background = "#fc2e20";
        header[0].style.background = "#fc2e20";
    }
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no]-1].style.display = "flex";
    setTimeout(() => changeSlide(1, no), 5000);
}

function toggleNav() {
    let nav = document.getElementById("nav");
    let menu = document.getElementById("nav__button_menu");
    let cross = document.getElementById("nav__button_cross");
    if (nav.style.display === "block") {
        nav.style.display = "none";
        menu.style.display = "block";
        cross.style.display = "none";
        document.querySelector('body').style.position = 'static';
        window.scrollTo(0, 0);
    } else {
        nav.style.display = "block";
        menu.style.display = "none";
        cross.style.display = "block";
        document.querySelector('body').style.position = 'fixed';
    }
}
