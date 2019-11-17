var userPass = "Rick2shaw"
var enterPass = prompt("Please enter password ",);
var strLen = enterPass.length;

if (strLen < 1) {
    alert("Please enter your password ");
}  
else { 
    if (userPass == enterPass) {
    alert("Correct! the password you entered matches the original password" );    
    }
    else {
        alert("Incorrect password") 
    }
}  