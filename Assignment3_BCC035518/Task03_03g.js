document.write(" Colors <br> \n");
var arrColor = ["Red","Yellow","Green","Blue","Black","Cyan"];
document.write("Array " + arrColor + " <br> \n");
var question = "Where (index) do you want to delete ? ";
var defaultans = "0";
var colo = prompt(question,defaultans)
var question = "How many colors to delete ? ";
var defaultans = 0;
var inde = prompt(question,defaultans)
arrColor.splice(inde,colo);
document.write("Array " + arrColor + " <br> \n");