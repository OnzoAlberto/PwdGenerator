var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var H = window.innerHeight;
var W = window.innerWidth;

canvas.height = H;
canvas.width = W;

var char = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!£$%&/()=?^ìéè*+òçà°ù§{}@#<>\|€";
char = char.split("");

var fontSize = 12;
var columns = W / fontSize;
var decY = [];
var active = 1;

for (var n = 0; n < columns; n++)
    decY[n] = Math.round(Math.random() * (H / 10));

ctx.fillStyle = "black";
ctx.fillRect(0, 0, W, H);

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, W, H);

    ctx.fillStyle = "#0F5";
    ctx.font = fontSize + "px Matrix";

    for (var i = 0; i < decY.length; i++) {
        var text = char[Math.floor(Math.random() * char.length)];
        ctx.fillText(text, i * fontSize, decY[i] * fontSize);
        if (decY[i] * fontSize > H && Math.random() > 0.98) {
            decY[i] = 0;
        }

        decY[i]++;
    }
}

setInterval(draw, 42);