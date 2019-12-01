var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];
var c = a + b;
c.sort();
document.write(c + " <br> \n"); 
arrLen=c.length;
for (i = 0; i < arrLen; i++) {
   if (c[i] = c[i+1]) {
    document.write(c[i] + " <br> \n");
    c.splice(i,1);
   }
}
document.write(c + " <br> \n"); 

//[1,2,3,4,5,6,7,8,9,10,20,40,60,70]