const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
let drawing = false;
let var_x = 0;
let var_y = 0;

function drawMarkerLine(x1, y1, x2, y2) {
    const offset = 20; 

    for (let i = 0; i <= offset; i++) {
        const gradient = ctx.createLinearGradient(x1, y1, x2 + i, y2 + i);
        gradient.addColorStop(0, "rgba(0, 0, 0, 1)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0.3)");

        ctx.strokeStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(x1 + i, y1 + i);
        ctx.lineTo(x2 + i, y2 + i);
        ctx.lineWidth = 2;
        ctx.stroke();
    }
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
    drawMarkerLine(var_x, var_y, x, y);
    var_x = x;
    var_y = y;
});

myCanvas.addEventListener("mouseup", () => {drawing = false;});
myCanvas.addEventListener("mouseleave", () => {drawing = false;});