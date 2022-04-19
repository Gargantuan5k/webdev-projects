const btnMain = document.querySelector("#btn-main");

const isHovered = e => e.parentElement.querySelector(":hover") === e;
const getMousePos = (e) => new Array(e.clientX, e.clientY);

function randomizeElementPosition(element) {
    let docHeight = document.body.clientHeight,
    docWidth = document.body.clientWidth,
    elementWidth = element.clientWidth,
    elementHeight = element.clientHeight,
    maxHeight = docHeight - elementHeight,
    maxWidth = docWidth - elementWidth;

    element.style.left = `${Math.floor(Math.random() * maxWidth)}px`;
    element.style.top = `${Math.floor(Math.random() * maxHeight)}px`;
}

function checkHover(element) {
    const hovered = isHovered(element);
    if (hovered !== this.hovered) {
        randomizeElementPosition(element);
        // console.log(hovered ? "hovered" : "normal");
        this.hovered = hovered;
    }
};

document.addEventListener("mousemove", (event) => checkHover(btnMain));
btnMain.addEventListener("click", (event) => handleWin(event))