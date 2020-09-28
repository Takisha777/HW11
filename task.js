// Пишем свой слайдер изображений отображаем изображение и кнопки Next, Prev по бокам от изображения
// При клике на Next - показываем следующее изображение
// При клике на Prev - предыдущее
// При достижении последнего изображения - прятать кнопку Next.
// Аналогично с первым изображением и кнопкой Prev.
let slideIndex  = 1;
slider(slideIndex);

debugger;
// let prevPic = function prevPic() {
//     slider(slideIndex -=1);
//     setInterval(slider, 3000);
// };
// let nextPic = function nextPic() {
//     slider(slideIndex +=1);
//     setInterval(slider, 3000);
// };

document.getElementById("prev").addEventListener("mouseup", function () {slider(slideIndex -=1);});
document.getElementById("next").addEventListener("mouseup", function (){slider(slideIndex +=1);});


// setInterval(slider, 3000);


function slider(n) {
    let slides = document.getElementsByClassName("picture");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";
}