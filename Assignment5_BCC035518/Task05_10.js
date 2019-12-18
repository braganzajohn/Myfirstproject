// 10. Write a JavaScript function that accept string and returns the count of vowel used within the string

var str = "mad dam is on the loose";

function isVowel(str1) {
    var newS="";
    var count = 0;
    str1 = str1.toLowerCase();
    //document.write(newS +  " <br> \n");
    for (var i = 0; i <= str1.length - 1 ; i++) { 
        if ( str1[i] == "a" || 
            str1[i] == "e" || 
            str1[i] == "i" ||
            str1[i] == "o" ||
            str1[i] == "u") {
            count++
            //document.write(str1[i] + " " + count + " <br> \n");
        }
        //document.write(str1[i] + " " + count + " <br> \n")
    }
    document.write(str1 + " has " + count + " vowels <br> \n");
}

isVowel(str);