const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputBox = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    //console.log(sumOfAngles);
    return sumOfAngles;
}

function isTriangle() {
    if (Number(inputs[0].value) > 0 && Number(inputs[1].value) > 0 && Number(inputs[2].value) > 0) {
        const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
        if (sumOfAngles === 180) {
            outputBox.innerText = "Yay, The angles form a triangle";
        } else {
            outputBox.innerText = "Oh Oh! The angles don't form a triangle";
        }
    } else {
        outputBox.innerText = "Please enter positive values!";
    }
}

isTriangleBtn.addEventListener("click", isTriangle)