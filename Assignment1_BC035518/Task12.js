var usdQty = 10;
var ksaQty = 25;
var usdRate = 155;
var ksaRate = 41;
var pkrTotal;
pkrTotal = (usdQty * usdRate) + (ksaQty * ksaRate);
//<h2>Currency in PKR</h2>
document.write("<h2>Currency in PKR </h2> <br> \n");
document.write("Total Currency in PKR: " + pkrTotal + "\n <br>");