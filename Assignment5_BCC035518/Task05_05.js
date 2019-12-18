// A cashier has currency notes of denominations 10, 50 and 100.
var amount = parseInt(prompt(" Enter amount to draw : "));
const TEN = 10;
const FIFTY = 50;
const HUNDRED = 100;

function calcNotes(amt) {
    // 
    document.write(amt +  " <br> \n");
    var hund = Math.floor(Math.abs(amt/HUNDRED));
    document.write(hund +  " <br> \n");
    var rem = amt % HUNDRED;
    document.write(rem +  " <br> \n");
    var fift = Math.floor(Math.abs(rem/FIFTY));
    document.write(fift +  " <br> \n");
    var rem2 = rem % FIFTY
    document.write(rem2 +  " <br> \n");
    var ten = Math.floor(Math.abs(rem2/TEN));
    document.write(ten +  " <br> \n");
    var rem3 = rem2 % TEN
    document.write(rem3 +  " <br> \n");
    document.write(" Notes of 100 are  " + hund +  " <br> \n");
    document.write(" Notes of 50  are  " + fift +  " <br> \n");
    document.write(" Notes of 10  are  " + ten +  " <br> \n");
    document.write(" Notes of units  are  " + rem3 +  " <br> \n");
}
calcNotes(amount);