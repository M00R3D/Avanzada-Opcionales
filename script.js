const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
let drawing = false;
let var_x = 0;
let var_y = 0;
ctx.strokeStyle = "black";
// ctx.lineWidth = 4; 
ctx.lineCap = "square";
// ctx.setLineDash([2, 19]);
function drawLine(x1, y1, x2, y2) {
    const maxOffset = 0;
    const offsetX1 = x1 + ( maxOffset - maxOffset / 2);
    const offsetY1 = y1 + ( maxOffset - maxOffset / 2);
    const offsetX2 = x2 + ( maxOffset - maxOffset / 2);
    const offsetY2 = y2 + ( maxOffset - maxOffset / 2);

    ctx.beginPath();
    ctx.moveTo(offsetX1, offsetY1);
    ctx.lineTo(offsetX2, offsetY2);
    ctx.lineWidth =  8;
    ctx.stroke();
}

myCanvas.addEventListener("mousedown", (e) => {
    drawing = true;
    var_x = e.clientX - myCanvas.getBoundingClientRect().left;
    var_y = e.clientY - myCanvas.getBoundingClientRect().top;
});

myCanvas.addEventListener("mousemove", (e) => {
    if (!drawing) return;
    const x = e.clientX - myCanvas.getBoundingClientRect().left;
    const y = e.clientY - myCanvas.getBoundingClientRect().top;
    drawLine(var_x, var_y, x, y);
    var_x = x;
    var_y = y;
});
myCanvas.addEventListener("mouseup", () => {drawing = false;});
myCanvas.addEventListener("mouseleave", () => {drawing = false;});