document.write(" Validate Passwords <br> \n");
var letterNumber = /^[0-9a-zA-Z]+$/;
var Number = /^[0-9]+$/;
while (pass != 0) {
var pass = input("Enter a Password (0 = exit : ");
document.write(pass + " <br> \n");
var passLen = pass.length;
if (passLen < 0 || passLen > 8) {
    message = "Password length less than 0 or greater than 8 - Please re-enter ";
    document.write(message + " <br> \n");
}
elseif (pass != letterNumber) {
    message = "Password contains characters other than letters and numbers ";
    document.write(message + " <br> \n");
}
elseif (pass.charAt(0) = Number) {
    message = "1st character number not accepted - please re-enter ";
    document.write(message + " <br> \n");
}
document.write(pass + " <br> \n");
}