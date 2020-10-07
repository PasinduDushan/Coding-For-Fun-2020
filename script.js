function selectMode(mode){

var color = "ghostWhite";
var image = "logo.png";
var label = "Coding For Fun 2020";

if(mode === "dark"){

color = "darkSlateBlue";
image = "logo.png";
label = "Coding For Fun 2020";

}else if (mode === "light") {

color = "ghostWhite";
image = "logo.png";
label = "Coding For Fun 2020";

}else{

color = "dimGray";
image = "logo.png";
label = "Coding For Fun 2020";

}

console.log(label);

document.getElementById("icon").src = image;
document.getElementById("theme").style.backgroundColor = color;
document.getElementById("contactus").style.backgroundColor = color;
document.getElementById("label").innerHTML = label;

}
