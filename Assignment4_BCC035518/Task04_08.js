document.write(" Round a number to given decimal places <br> \n");
var num = 1;
var rnd = 0;
var num1 = 0;
var rnd1 = 0;
var text;
while (num > 0) {
    num = prompt("Enter a number (0 to exit) ");
    num1 = parseInt(num);
    //rnd = prompt("Enter decimal places to round ");
    //rnd1 = parseInt(rnd);
    if (num = 0) {
        break;
    }
    else {
        text = "Input : ";
        document.write(text + num1 + " <br> \n");
        text = "Value in words : ";
        num1Word = 
        document.write(text + num1.toFixed(rnd1) + " <br> \n");
        num = 0;
    }
}