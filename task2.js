// Пишем свой слайдер изображений отображаем изображение и кнопки Next, Prev по бокам от изображения
// При клике на Next - показываем следующее изображение
// При клике на Prev - предыдущее
// При достижении последнего изображения - прятать кнопку Next.
// Аналогично с первым изображением и кнопкой Prev.
let slideIndex  = 0;

document.getElementById("prev").addEventListener("mouseup", prev);
document.getElementById("next").addEventListener("mouseup", next);

let interval = setInterval(sliderTime, 2000);

function sliderTime() {
    slider(slideIndex++);
}
function prev() {
    if (interval) clearInterval(interval);
    sliderPrev(slideIndex--);
    interval = setInterval(sliderTime, 2000);
}
function next() {
    if (interval) clearInterval(interval);
    slider(slideIndex++);
    interval = setInterval(sliderTime, 2000);
}
function slider(x) {
    let slides = document.getElementsByClassName("picture");
    if (x + 1 > slides.length-1) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length-1;
    }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}
function sliderPrev() {
    let slides = document.getElementsByClassName("picture");
    if (slideIndex < 0) {
        slideIndex = slides.length-1;
    }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}