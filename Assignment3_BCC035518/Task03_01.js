document.write(" Qualifications <br> \n");
//var arrQuali = ["SSC","BCS","HSC"]
var arrQuali = [];
arrQuali[0] = "SSC";
arrQuali[1] = "BCS";
arrQuali[2] = "HSC";
arrQuali[3] = "BS";
arrQuali[4] = "BCOM";
arrQuali[5] = "MS";
arrQuali[6] = "M Phil";
arrQuali[7] = "PHD";
//document.write("Array " + arrQuali + " <br> \n");
var arrLen = arrQuali.length;
//document.write("Length of Array is " + arrLen + " <br> \n");
for (i=0; i < arrLen; i++) {
    document.write(i+1 + ")  " + arrQuali[i] + " <br> \n");
}
// var question = "Which city are you from? ";
// var defaultans = "Karachi";
// var city = prompt(question,defaultans)
// if(city == "Karachi") {
//     document.write("Welcome to the city of lights <br> \n");
//}
