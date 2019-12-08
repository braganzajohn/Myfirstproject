// Declaration of variables
var str, len, stNum, endNum;
occ = 0;
document.write(" Removal of HTML tags <br> \n");
str = "<p><strong><em>Only print this</em></strong></p>";
document.write("Text : " + str + " <br> \n");

//document.write(len + wordSrch + lenSrch + " <br> \n");
while (stNum != 0) {
    stNum = 0;
    len = str.length;
    for (var i = 0; i < len; i++) {
    //document.write(i + " <br> \n");
    wordCmp1 = str.slice(i,i+1);
    //document.write(wordCmp1 + " <br> \n");
    if (wordCmp == "<") {
        stNum = i;
        //document.write(wordCmp + " <br> \n");
        for (var j = i; j < len; j++ ) {
            wordCmp2 = str.slice(j,j+1);
            if (wordCmp2 = ">") {
                endNum = j;
                break
            }
        }
        str.slice()
    }
    //document.write(wordCmp + " <br> \n");
}
document.write("There are " + occ + " occurances of the word \'" + wordSrch + "\' <br> \n"); 
}