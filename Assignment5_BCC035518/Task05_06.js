// 6. Write a function that will take an array and generate a mirror array of it.

var array = [4,56,3,7,8];
var arraz = [4,56,3,7,8];
function mirror(arra) {
    //document.write(arra +  " <br> \n");
    var arrb = arra.reverse();    
    //document.write(arrb +  " <br> \n");
    //document.write(array +  " <br> \n");
    var arrc = arraz + "," + arrb;
    document.write(arrc +  " <br> \n");
  
}
mirror(array);
//document.write("arraz = " + arraz +  " <br> \n");