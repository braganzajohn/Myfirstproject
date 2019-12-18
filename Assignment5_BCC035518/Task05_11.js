// Write a JavaScript function named isVowel

var letters = /^[a-zA-Z]+$/
function acceptChar() {
    var inpChar = prompt("Enter a character : ").toLowerCase();
    inpChar = inpChar.charAt(0);
    if (inpChar.match(letters)) {
        document.write(" Character entered " + inpChar + " <br> \n");
        return inpChar;
    } 
    else {
        document.write(" Enter alpha char " + inpChar + " <br> \n");
        return "";
    }
}

function isVowel(str1) {
    var str2="";
    str1 = str1.toLowerCase();
    //document.write(str1 +  " <br> \n");
    switch(str1) {
        case "a" :
            //document.write(str1 +  " <br> \n");
            str2=str1;
            break;
        case "e" :
            //document.write(str1 +  " <br> \n");
            str2=str1;
            break;
        case "i" :
            //document.write(str1 +  " <br> \n");
            str2=str1;
            break;
        case "o" :
            //document.write(str1 +  " <br> \n");
            str2=str1;
            break;
        default :
            document.write(str1 +  " Not a vowel <br> \n");
            break;
                            
    }
    if (str2 != "") {
        document.write(str2 +  " Is a vowel <br> \n");
    }
    
}
var str = acceptChar();
isVowel(str);