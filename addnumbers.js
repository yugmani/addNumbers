let total;
let html;
let numbers = [];

let submit = document.getElementById("number-submit");
submit.addEventListener("click", getResult);

function addnumbers(n1, n2){
    total = parseInt(n1)  + parseInt(n2);
    numbers.push(parseInt(n1), parseInt(n2));
    return total;
}


function getResult(){
    event.preventDefault();
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    addnumbers(num1, num2);
    displayResult();
}


function displayResult(){

    // addnumbers(num1, num2);

    html = "<p> 1st Number: <strong>"+numbers[0]+ "</strong></p>";
    html += "<p> 2nd Number: <strong>"+numbers[1]+ "</strong></p>";
    html += "<h3> Total: "+total+ "</h3>";
    document.getElementById("result").innerHTML = html;
}