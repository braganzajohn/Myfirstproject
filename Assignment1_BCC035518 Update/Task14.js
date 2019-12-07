var a = 2, b = 1;
var a1 = a, b1 = b;
var result = --a - --b + ++b + b--
var result1 = --a1;
var result2 = --b1;
var result3 = ++b1;
var result4 = b1--;
//document.write("(a) " + a1 + " -1 = " + a + "<br> \n");
document.write("a = 2, b = 1 <br> \n");
document.write("--a : a was 2, a is " + result1 + " <br> \n");
document.write("--b : b was 1, b is " + result2 + " <br> \n");
document.write("++b : b was " + result2 + ", b is " + result3 + " <br> \n");
document.write("b-- : b was " + result3 + ", b is " + result4 + " <br> \n");
//document.write("a is " + a + "<br> \n");
document.write("Result is --a - --b + ++b + b--  \n <br>");
document.write("Result is " + result1 + " - " + result2 + " + " + result3 + " + " + result4 + " \n <br>");
document.write("Result is " + result + "\n <br>");