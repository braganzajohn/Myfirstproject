var sub1Marks = prompt("Enter marks for subject 1: ");
var sub2Marks = prompt("Enter marks for subject 2: ");
var sub3Marks = prompt("Enter marks for subject 3: ");
var subMarks = parseInt(sub1Marks) + parseInt(sub2Marks) + parseInt(sub3Marks);
var totMarks = 300;
var percent = ( subMarks / totMarks ) * 100;
if (percent >= 80.00) {
    grade = "A-one";
    remarks = "Excellent";
}
else if (percent >= 70.00) {
    grade = "A";
    remarks = "Good";
}
else if (percent >= 60.00) {
    grade = "B";
    remarks = "You need to improve ";
}
else if (percent < 60.00) {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("Total marks    : " + totMarks + "<br> \n");
document.write("Marks obtained : " + subMarks + "<br> \n");
document.write("Percentage     : " + percent + "% <br> \n");
document.write("Grade          : " + grade + "<br> \n");
document.write("Remarks        : " + remarks + "<br> \n");
