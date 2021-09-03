const inputBaseHeight = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const outputBox = document.querySelector("#output");

function calculateTriangleArea() {
    const base = Number(inputBaseHeight[0].value);
    const height = Number(inputBaseHeight[1].value);
    const area = (base*height)* 0.5;
    outputBox.innerText = "area of triangle is: " + area;
}

areaBtn.addEventListener("click" , calculateTriangleArea);