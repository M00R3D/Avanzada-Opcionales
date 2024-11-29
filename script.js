const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
let drawing = false;
let var_x = 0;
let var_y = 0;
function drawCircle(x, y) {
    if (Math.random() > 0.7) return;
    const radio = Math.random() * 10 + 5;
    const opacidad = Math.random() * 0.7 + 0.2;
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, Math.PI * 2); 
    ctx.fillStyle = `rgba(255, 0, 0, ${opacidad})`;
    ctx.fill();
}

myCanvas.addEventListener("mousedown", (e) => {
    drawing = true;
    var_x = e.clientX - myCanvas.getBoundingClientRect().left;
    var_y = e.clientY - myCanvas.getBoundingClientRect().top;
    drawCircle(var_x, var_y);
});

myCanvas.addEventListener("mousemove", (e) => {
    if (!drawing) return;
    const x = e.clientX - myCanvas.getBoundingClientRect().left;
    const y = e.clientY - myCanvas.getBoundingClientRect().top;
    drawCircle(x, y);
});

myCanvas.addEventListener("mouseup", () => {drawing = false;});
myCanvas.addEventListener("mouseleave", () => {drawing = false;});