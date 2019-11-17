var selNum = prompt("Enter a number ",);
var guessNum = parseInt(selNum);
var oddEven = guessNum % 2;
if (oddEven == 1) {
    alert("Number is Odd ");
}  else { 
    alert("Number is Even ");
}  