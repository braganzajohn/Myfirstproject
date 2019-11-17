var secNum = 5;
var selNum = prompt("Guess a number between 1 and 10 ",);
var guessNum = parseInt(selNum);
if (secNum == guessNum) {
    alert("Bingo Correct answer ");
}  else if (++secNum == guessNum) { 
    alert("Close enough to the correct answer ");
}  