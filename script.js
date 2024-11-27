const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
let drawing = false;let var_x = 0;let var_y = 0;
let width = 10;
const maxWidth = 50;

ctx.strokeStyle = "blue";
ctx.shadowColor = "blue";
ctx.lineCap = "round";

myCanvas.addEventListener("mousedown", (e) => {
    drawing = true; 
        var_x = e.clientX - myCanvas.getBoundingClientRect().left;
        var_y = e.clientY - myCanvas.getBoundingClientRect().top;
});

myCanvas.addEventListener("mousemove", (e) => {
    if (!drawing) return; 
    const x = e.clientX - myCanvas.getBoundingClientRect().left;
    const y = e.clientY - myCanvas.getBoundingClientRect().top;

    if (width < maxWidth) 
    {
        width += 0.5; 
    }
    ctx.lineWidth = width;
    ctx.shadowBlur = width / 2; 
    ctx.beginPath();
    ctx.moveTo(var_x, var_y);  ctx.lineTo(x, y);
    ctx.stroke();
    var_x = x; var_y = y;
});
myCanvas.addEventListener("mouseup", () => {drawing = false;width = 10;});
myCanvas.addEventListener("mouseleave", () => {drawing = false;width = 10;});