// Declaration of variables
var rndNum, impNum, diceNum, num;
document.write(" Roll of the dice <br> \n");
num = 1;
while (num != 0) {
    num = prompt("Enter 1 to roll the dice (0 to exit) ");
    num = parseInt(num);
    if (num != 1) {
        break;
    }
    else {
        //Generate Random Number
        rndNum = Math.random();
        // 1 - 6 required
        impNum = (rndNum * 6) + 1;
        diceNum = Math.floor(impNum);
        var text = "Random Dice Value : ";
        document.write(text + diceNum + " <br> \n");
    //var text = "Round off value : ";
    //document.write(text + Math.round(num) + " <br> \n");
    //var text = "Floor value : ";
    //document.write(text + Math.floor(num) + " <br> \n");
    //var text = "Ceil value : ";
    //document.write(text + Math.ceil(num) + " <br> \n");
    //    num=0;
    }
}
//for (i=0; i < arrLen; i++) {
//    document.write(i+1 + ")  " + arrQuali[i] + " <br> \n");
//}
// var question = "Which city are you from? ";
// var defaultans = "Karachi";
// var city = prompt(question,defaultans)
// if(city == "Karachi") {
//     document.write("Welcome to the city of lights <br> \n");
//}
