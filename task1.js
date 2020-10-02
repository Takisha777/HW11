let arrPictures = [
    "img/0.png",
    "img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.png",
    "img/6.png",
    "img/7.png",
    "img/8.png",
    "img/9.png",
];
function slide () {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let sec = new Date().getSeconds();
    document.hour1.src = arrPictures[Math.trunc(hour/10)];
    document.hour2.src = arrPictures[Math.round(hour/10%1*10)];
    document.minute1.src = arrPictures[Math.trunc(minute/10)];
    document.minute2.src = arrPictures[Math.round(minute/10%1*10)];
    document.sec1.src =arrPictures[Math.trunc(sec/10)];
    document.sec2.src = arrPictures[Math.round(sec/10%1*10)];
}
setInterval(slide,1000);