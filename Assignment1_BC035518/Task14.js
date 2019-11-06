var a = 2, b = 1;
var a1 = a, b1 = b;
var result = --a - --b + ++b + b--
var result1 = --a1;
var result2 = result1 - --b;
var result3 = result2 + ++b;
document.write("(a) " + a1 + " -1 = " + a + "<br> \n");
document.write("Result a = 2, b = 1 <br> \n");
document.write("Result --a = " + result1 + " <br> \n");
document.write("Result --a - --b = " + result2 + " <br> \n");
document.write("Result --a - --b + ++b = " + result3 + " <br> \n");
document.write("Result --a - --b + ++b + b-- <br> \n");
document.write("Result   1 -   0 +   1 + 1 = 3 <br> \n");
document.write("a is " + a + "<br> \n");
document.write("b is " + b + "\n <br>");
document.write("Result is " + result + "\n <br>");