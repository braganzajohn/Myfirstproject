var selNum = prompt("Enter a single character ",);
var strLen = selNum.length;

if (strLen != 1) {
    alert("Please enter only a single character ");
}  
else { 
    if (selNum == "a" || selNum == "A" || selNum == "e" || selNum == "E" || selNum == "i" || selNum == "I" || selNum == "o" || selNum == "O" || selNum == "u" || selNum == "U") {
    alert("Vowel " + selNum );    
    }
    else {
        alert("Not a Vowel " + selNum ) 
    }
}  