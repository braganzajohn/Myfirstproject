var selNum = prompt("Enter a number ",);
var guessNum = parseInt(selNum);

if (guessNum > 0) {
    alert("Number is Positive ");
}  
else if (guessNum < 0) {
    alert("Number is Negative");
}
else { 
    alert("Number is Zero ");
}  