let btn = document.querySelector(".btn");
let video = document.querySelector("video");
let hbg = document.querySelector(".header-bg");
let header = document.querySelector(".header");
let content = document.querySelector(".content");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    video.style.display = "block";
    hbg.style.display = "none";
    header.style.display = "none";
    content.style.display = "none";
    video.play();
});

window.onload = () => {
    btn.scrollIntoView();
}
