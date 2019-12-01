document.write(" Colors <br> \n");
var arrColor = ["Red","Yellow","Green","Blue","Black","Cyan"];
document.write("Array " + arrColor + " <br> \n");
var question = "What color do you want to add ? ";
var defaultans = "Black";
var colo = prompt(question,defaultans)
var question = "Where (index) do you want it ? ";
var defaultans = 0;
var inde = prompt(question,defaultans)
arrColor.splice(inde,0,colo);
document.write("Array " + arrColor + " <br> \n");
