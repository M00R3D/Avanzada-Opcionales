const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
let drawing = false;
let var_x = 0;
let var_y = 0;

function drawCircle(x, y) {
    const radius = 14; 
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2); 
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.stroke();
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