// Declaration of variables
var wordCmp1, len, num, numAdd,occ;
numAdd = 0;
occ = 0;
document.write(" Mean of all digits <br> \n");
num = prompt("Enter a positive number ");
//document.write("Text : " + str + " <br> \n");
len = num.length;
for (var i = 0; i < len; i++) {
    //document.write(i + " <br> \n");
    wordCmp1 = num.slice(i,i+1);
    //document.write(wordCmp1 + " <br> \n");
    numAdd = numAdd + parseInt(wordCmp1);
    occ++
    //document.write(wordCmp1 + " <br> \n");
    //document.write(numAdd + " <br> \n");
}
numAvg = numAdd / occ;
document.write(num + " = " + numAdd + "/" + occ + " = " + numAvg + " <br> \n"); 