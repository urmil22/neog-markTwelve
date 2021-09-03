const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputBox = document.querySelector("#output");

function calculateSumofSquares(a,b) {
    const sumOfSquares = a*a + b*b;
    //console.log(sumOfSquares);
    return sumOfSquares;
}

function calculateHypotenuse() {
   const sumOfSquares = calculateSumofSquares(Number(sides[0].value), Number(sides[1].value));
   const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
   outputBox.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);