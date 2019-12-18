// Write a function that computes the factorial of a number

var numb = 6;
function factorOfNumber(facto) {
    for (i = 1; i < numb; i++) {
        facto = facto * i;
    }
    
    document.write(" Factorial of " + numb + " is " + facto +  " <br> \n");
}

factorOfNumber(numb);
