const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
let drawing = false;
let var_x = 0;
let var_y = 0;

function drawTattooLine(x1, y1, x2, y2) {
    const lineCount = 5; 
    const lineSpacing = 4; 

    for (let i = 0; i < lineCount; i++) {
        const offset = (i - Math.floor(lineCount / 2)) * lineSpacing;
        ctx.beginPath();
        ctx.moveTo(x1 + offset, y1);
        ctx.lineTo(x2 + offset, y2);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "black";
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
    drawTattooLine(var_x, var_y, x, y);
    var_x = x;
    var_y = y;
});


myCanvas.addEventListener("mouseup", () => {drawing = false;});
myCanvas.addEventListener("mouseleave", () => {drawing = false;});