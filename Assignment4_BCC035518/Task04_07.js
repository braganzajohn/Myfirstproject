// Declaration of variables
var str, strLow, wordSrch, len, lenSrch, occ, wordCmp;
occ = 0;
document.write(" Count the occurances of the word THE <br> \n");
str = "The quick brown fox jumped over the lazy dog";
document.write("Text : " + str + " <br> \n");
strLow = str.toLowerCase();
//document.write(strLow + " <br> \n");
wordSrch = "the";
len = strLow.length;
lenSrch = wordSrch.length;
//document.write(len + wordSrch + lenSrch + " <br> \n");
for (var i = 0; i < len; i++) {
    //document.write(i + " <br> \n");
    wordCmp = strLow.slice(i,i+lenSrch);
    //document.write(wordCmp + " <br> \n");
    if (wordCmp == wordSrch) {
        occ++;
        //document.write(wordCmp + " <br> \n");
    }
    //document.write(wordCmp + " <br> \n");
}
document.write("There are " + occ + " occurances of the word \'" + wordSrch + "\' <br> \n"); 