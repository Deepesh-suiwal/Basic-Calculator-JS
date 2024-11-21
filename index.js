let button = document.getElementById("btn");
let ans = document.getElementById("res");
let input1 = document.getElementById("num");
let input2 = document.getElementById("num2");
button.addEventListener('click', () => {

    let num1 = input1.value;
    let num2 = input2.value;
    let ope = document.getElementById("operation").value;
    let result = 0



    if (ope == '+') {
        result = parseInt(num1) + parseInt(num2);
    }
    else if (ope == '-') {
        result = parseInt(num1) - parseInt(num2);

    }
    else if (ope == '*') {
        result = parseInt(num1) * parseInt(num2);

    }
    else if (ope == '/') {
        result = parseInt(num1) / parseInt(num2);
    }
    else if (ope == '%') {
        result = parseInt(num1) % parseInt(num2);
    }

    ans.value = result;
})

let button1 = document.getElementById("button");
button1.addEventListener('click', () => {
    input1.value = "";
    input2.value = "";
    ans.value = "";
})
