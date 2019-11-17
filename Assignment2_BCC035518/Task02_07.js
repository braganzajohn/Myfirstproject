var num1 = prompt("Enter number 1 ",);
var num1Int = parseInt(num1);
var num2 = prompt("Enter number 2 ",);
var num2Int = parseInt(num2);
var oper = prompt("Enter + - / * % <br> \n")
var resultant;
if (oper == "+") {
    resultant = num1Int + num2Int;
    document.write(num1Int + " + " + num2Int + " = " + resultant + "<br> \n" );
}  else if (oper == "-") {
    resultant = num1Int - num2Int;
    document.write(num1Int + " - " + num2Int + " = " + resultant + "<br> \n" );
}  else if (oper == "*") {
    resultant = num1Int * num2Int;
    document.write(num1Int + " * " + num2Int + " = " + resultant + "<br> \n" );
}  else if (oper == "/") {
    resultant = num1Int / num2Int;
    document.write(num1Int + " / " + num2Int + " = " + resultant + "<br> \n" );
}  else if (oper == "%") {
    resultant = num1Int % num2Int;
    document.write(num1Int + " % " + num2Int + " = " + resultant + "<br> \n" );
}