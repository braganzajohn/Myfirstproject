var enterTime = prompt("Please enter time in 24 hour clock ",);
var enterTime = parseInt(enterTime);
alert(enterTime);
var enterHour = enterTime / 100;
enterHour = parseInt(enterHour);
var enterMin = enterTime % 100;
alert(enterHour + " " + enterMin);
if (enterTime < 0 && enterTime > 2359) {
    if((enterHour < 0 && enterHour > 23) || (enterMin < 0 && enterMin > 59)) {
        alert("Please enter correct 24 hour time ");
    }
}  
else { 
    if (enterHour >= 12 ) {
    var pmHour = enterHour - 12;
        alert("The time is " + pmHour + ":" + enterMin + "PM");    
    }
    else {
        alert("The time is " + enterHour + ":" + enterMin + "AM");
    }
}  