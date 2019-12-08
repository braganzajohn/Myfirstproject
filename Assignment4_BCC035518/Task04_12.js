var d = new Date();
var n = d.getDate();
var mill = d.getTime();
document.write(mill + " <br> \n");
if (n > 15) {
    document.write("Last days of the month <br> \n")
}
else {
    document.write("First fifteen days of the month <br> \n")
}