function changeRGB() {
    const rgb = document.getElementById('rgb-color');
    const red = parseInt(Math.floor(Math.random() * 256));
    const green = parseInt(Math.floor(Math.random() * 256));
    const blue = parseInt(Math.floor(Math.random() * 256));
    rgb.innerText = `Consegues adivinhar esta cor? (${red}, ${green}, ${blue})

    Escolha uma cor.`;
    return `rgb(${red}, ${green}, ${blue})`;
}
window.onload = changeRGB;

const balls = document.getElementsByClassName('ball');

function setBallColor() {
    for (let index = 0; index < balls.length; index += 1) {
        balls[index].style.backgroundColor = changeRGB();
    }
}

window.onload = setBallColor;
