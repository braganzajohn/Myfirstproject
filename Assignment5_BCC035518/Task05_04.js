// Create 2 functions that calculate properties of a circle
var radius = 6;
const PI = 3.141592653589793;
function calcCircumference(rad) {
    // 2πr
    var circum = (2 * PI * rad);
    circum = circum.toFixed(2);
    document.write(" The Circumference is  " + circum +  " <br> \n");
}

function calcArea(rad) {
    // πr2
    var area = (PI * (rad ** 2));
    area = area.toFixed(2);
    document.write(" The area is  " + area +  " <br> \n");
}

calcCircumference(radius);
calcArea(radius);
