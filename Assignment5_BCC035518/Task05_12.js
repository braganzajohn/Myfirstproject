// 12. Write a JavaScript program act as number guessing game

var num1 = 0;

function genRnd() {
    var numg = (Math.random() * 100) + 1;
    var numh = Math.floor(numg);
    document.write(numh +  " <br> \n");
    return numh;
}
 
function guessNum() {
    var ans = "y";
    var ansp = "";
    while (ans == "y") {
        num1 = genRnd();
        var num2 = 0;
        document.write(num1 +  " <br> \n");
        for (var i = 1; i <= 3; i++) { 
            num2 = parseInt(prompt("Guess No " + i + " Enter (1 - 100) : "));
            document.write(num2 +  " <br> \n");
            if ((num1 > 0 && num1 <= 100) && num1 == num2) {
                document.write("You have Won " +  " <br> \n");
                break;
            }
            else {
                document.write("Incorrect please try again " +  " <br> \n");
            }
            if (i == 3 && num1 != num2) {
                document.write("You Loose " +  " <br> \n");
                
            }
        }
        ans = prompt("Do you want to play again y/n");

    }
    
}

guessNum();