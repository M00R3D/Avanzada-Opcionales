const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
let drawing = false;
let tool = "pencil";
let color = "#000000";
let lineWidth = 5;
let isFilled = false;
let startX, startY;

const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];
document.getElementById("tool").addEventListener("change", (e) => {
    tool = e.target.value;
});

document.getElementById("lineWidth").addEventListener("input", (e) => {
    lineWidth = parseInt(e.target.value, 10);
});

document.getElementById("fillToggle").addEventListener("click", () => {
    isFilled = !isFilled;
    document.getElementById("fillToggle").innerText = `Figura rellena: ${isFilled ? "ON" : "OFF"}`;
});

document.getElementById("clearCanvas").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

document.getElementById("downloadImage").addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "drawing.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
});

const colorContainer = document.getElementById("colorContainer");
colors.forEach((col) => {
    const colorButton = document.createElement("button");
    colorButton.style.backgroundColor = col;
    colorButton.className = "btn btn-sm";
    colorButton.style.width = "40px";
    colorButton.style.height = "40px";
    colorButton.style.margin = "5px";
    colorButton.addEventListener("click", () => {
        color = col;
    });
    colorContainer.appendChild(colorButton);
});

canvas.addEventListener("mousedown", (e) => {
    drawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
    if (tool === "pencil" || tool === "eraser") {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
    }
});

canvas.addEventListener("mousemove", (e) => {
    if (!drawing) return;

    const x = e.offsetX;
    const y = e.offsetY;

    if (tool === "pencil") {
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.lineTo(x, y);
        ctx.stroke();
    } else if (tool === "eraser") {
        ctx.clearRect(x - lineWidth / 2, y - lineWidth / 2, lineWidth, lineWidth);
    }
});

canvas.addEventListener("mouseup", (e) => {
    if (!drawing) return;
    const x = e.offsetX;
    const y = e.offsetY;
    ctx.lineWidth = lineWidth;

    if (tool === "rectangle") {
        const width = x - startX;
        const height = y - startY;
        drawRectangle(startX, startY, width, height);
    } else if (tool === "circle") {
        const radius = Math.sqrt((x - startX) ** 2 + (y - startY) ** 2);
        drawCircle(startX, startY, radius);
    } else if (tool === "triangle") {
        drawTriangle(startX, startY, x, y);
    }

    drawing = false;
});

function drawRectangle(x, y, width, height) {
    if (isFilled) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    } else {
        ctx.strokeStyle = color;
        ctx.strokeRect(x, y, width, height);
    }
}

function drawCircle(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    if (isFilled) {
        ctx.fillStyle = color;
        ctx.fill();
    } else {
        ctx.strokeStyle = color;
        ctx.stroke();
    }
}

function drawTriangle(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x1 * 2 - x2, y2);
    ctx.closePath();
    if (isFilled) {
        ctx.fillStyle = color;
        ctx.fill();
    } else {
        ctx.strokeStyle = color;
        ctx.stroke();
    }
}
