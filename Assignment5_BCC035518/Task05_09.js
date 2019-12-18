// 9. Write a function to add weeks in current date

function addWeek(nowDate, week) {
    var addDays = week * 7;
    
    return new Date(nowDate.getTime() + addDays*24*60*60*1000);
}

var newDate = addWeek(new Date(), 2);
document.write(new Date() + "  <br> \n");
document.write(newDate + "  <br> \n");