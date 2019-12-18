// 8. Write a function that take birth date and returns Age in years, months and days

var rightNow = new Date();
document.write(theDay +  " <br> \n");
var theDay = rightNow.getDay();
var fullYear = rightNow.getFullYear();
document.write(theDay +  " <br> \n");
document.write(fullYear +  " <br> \n");
var monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
document.write(monthName +  " <br> \n");
var month = rightNow.getMonth();
document.write(month +  " <br> \n");
var nameOfMonth = monthName[11];
document.write(nameofMonth +  " <br> \n");
var fullDate = nameofMonth + " " + theDay + ", " + fullYear;
document.write(fullDate +  " <br> \n");

function inpDate() {

    while(true) {
        var inpD = prompt("Enter Date of birth DDMMYYYY format : ");
        inpDd = inpD.slice(0,2);
        inpMm = inpD.slice(2,4);
        inpYy = inpD.slice(4,8);
        document.write(inpD +  " <br> \n");
        document.write(inpYy +  " <br> \n");
        document.write(inpMm +  " <br> \n");
        document.write(inpDd +  " <br> \n");
        if (inpMm < 1 || inpMm > 12) {
            document.write(inpMm +  " Incorrect Month <br> \n");
            //break;
        }
        else if (inpYy >= fullYear) {
            document.write(inpYy +  " Incorrect Year <br> \n");
            //break;
        }
        else if (inpDd < 1 || inpDd > 31) {
            document.write(inpDd +  " Incorrect Day <br> \n");
            
        }
        else {
            document.write("Correct format Thank you  <br> \n");
            return inpD;
            break;
        }
        document.write("Please enter date in correct format  <br> \n");
    }
}


//checkDay(verDay);
//var now = new Date();
//var doomsday = new Date("June 30, 2035");
//var nowMilli = now.getTime();
//var doomsMilli = doomsday.getTime();
//var leftMilli = doomsMilli - nowMilli;
//var hourCalc = Math.floor(leftMilli / (1000 * 60 * 60 * 24));
//var minMilli = leftMilli - (hourCalc * 1000 *60 * 60 * 24);
//var minCalc = Math.floor(minMilli / (1000 * 60 * 60));
//var secMilli = minMilli - (minCalc * 1000 *60 * 60);
//var secCalc = Math.floor(secMilli / (1000 * 60));
//document.write("Hours : " + hourCalc + "  Minutes : " + minCalc + "  Secs : " + secCalc + " <br> \n");
var verDate = inpDate();