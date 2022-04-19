var button = document.getElementById("buzzer-btn");
var audio = document.getElementById("audio");

button.addEventListener("click", (e) => {
    audio.play();
});