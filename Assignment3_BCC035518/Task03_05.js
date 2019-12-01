var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var arr2 = [];
var arrLen = arr1.length;
var flag = "no match"
document.write("Length of Array is " + arrLen + " <br> \n");
// arr1.sort();
document.write(arr1 + " <br> \n");
for (i=0; i < arrLen; i++) {
    for (j=i+1;j < arrLen; j++) {
        if (arr1[i] == arr[j]) {
            flag = "match";
        }   
    }
    if (flag != "match") {
        arr2.push(arr1[i]);
    }
    else {
        flag = "No match";
    }
}
document.write(arr2 + "% <br> \n");
