var arr1 = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var arr2 = ["th","st","nd","rd"];
var arrLen = arr1.length;
for (i = 0; i < 3; i++) {
    document.write(i+1 + arr2[i+1] + " Choice is " + arr1[i] + " <br> \n"); 
}