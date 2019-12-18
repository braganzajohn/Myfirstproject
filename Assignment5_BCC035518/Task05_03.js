// Write a JavaScript function that checks whether a passed string is a palindrome or not

var str = "mad dan";

//function palin(str) {
   // document.write(str +  " <br> \n");
   // var arra = str.split("");
   // document.write(arra +  " <br> \n");
   // var arrb = arra.reverse();    
   // document.write(arrb +  " <br> \n");
   // var arrc = arrb.join("");
   // document.write(arrc +  " <br> \n");
    
   // if (arrc == str) {
   //     document.write(" The word or sentence is a palindrome : " + str +  " <br> \n");
   // }
   // else {
   //     document.write(" The word or sentence is not a palindrome  " + area +  " <br> \n");
   // }
   // 
//}

//palin(str);

function reverseString(str1) {
    var newS="";
    //document.write(newS +  " <br> \n");
    for (var i = str1.length - 1; i >= 0; i--) { 
        newS = newS + str1[i];
    //    document.write(newS +  " <br> \n");
    }
    return newS;
}


function palindrome(str) {
    var newSt = reverseString(str);
    if (newSt == str) {
        document.write(" The word or sentence is a palindrome : " + str + " " + newSt +  " <br> \n");
    }
    else {
        document.write(" The word or sentence is not a palindrome  " + str + " " + newSt +  " <br> \n");
    }
}
//reverseString(str);
palindrome(str);
