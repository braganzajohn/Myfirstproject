var question = "Traffic signal light color? ";
var defaultans = "Red";
var lights = prompt(question,defaultans)
if (lights == "Red") {
    document.write("Must stop <br> \n");
}  else if (lights == "Yellow") { 
    document.write("Ready to move <br> \n");
}  else if (lights == "Green") {
    document.write("Move now <br> \n");
}