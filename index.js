let button = document.getElementById("btn");
var ans = document.getElementById("res");
button.addEventListener('click', () => {

    var input1 = document.getElementById("num").value;
    var input2 = document.getElementById("num2").value;
    var ope = document.getElementById("operation").value;



    if (ope == '+') {
        var result = parseInt(input1) + parseInt(input2);
    }
    else if (ope == '-') {
        var result = parseInt(input1) - parseInt(input2);

    }
    else if (ope == '*') {
        var result = parseInt(input1) * parseInt(input2);

    }
    else if (ope == '/') {
        var result = parseInt(input1) / parseInt(input2);
    }
    else if (ope == '%') {
        var result = parseInt(input1) % parseInt(input2);
    }

    ans.value = result;
})
