// 7. Write a function to test whether a given date is a weekend

var rightNow = new Date();
var theDay = rightNow.getDay();

function checkDay(dDay) {
    //document.write(dDay +  " <br> \n");
    if (dDay > 5) {
        document.write("Its a weekend " + dDay +  " <br> \n");
    }
    else {
        var dayRem = 5 - dDay;
        document.write("Its  " + dayRem +  " day(s) to weekend  <br> \n");
    }
}
checkDay(theDay);
