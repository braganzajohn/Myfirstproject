var num = 1;
while (num > 0) {
    num = prompt("Enter a positive integer (0 to exit) ");
    num = parseFloat(num);
    if (num <= 0) {
        break;
    }
    else {
    document.write(" Floor and Ceil of Integer <br> \n");
    var text = "Number : ";
    document.write(text + num + " <br> \n");
    var text = "Round off value : ";
    document.write(text + Math.round(num) + " <br> \n");
    var text = "Floor value : ";
    document.write(text + Math.floor(num) + " <br> \n");
    var text = "Ceil value : ";
    document.write(text + Math.ceil(num) + " <br> \n");
    num=0;
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
