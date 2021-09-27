const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputBox = document.querySelector("#output");

function calculateSumofSquares(a , b) {
    const sumOfSquares = a*a + b*b;
    //console.log(sumOfSquares);
    return sumOfSquares;
}

function calculateHypotenuse() {

    if(Number(sides[0].value)>0 && Number(sides[1].value)>0) {
   const sumOfSquares = calculateSumofSquares(Number(sides[0].value), Number(sides[1].value));
   const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
   outputBox.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
    }
    else {
        outputBox.innerText= "Please enter positive values!";
    }
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);