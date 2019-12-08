var d = new Date();
var n = d.getDate();
var mill = d.getTime();
var min = mill / 60000;
var minu = Math.round(min);
document.write(minu + " <br> \n");