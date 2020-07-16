function selectMode(mode){

var color = "ghostWhite";
var image = "111605382-settings-icon-vector-isolated-on-white-background-settings-transparent-sign.jpg";
var label = "Coding For Fun 2020";

if(mode === "dark"){

color = "darkSlateBlue";
image = "111605382-settings-icon-vector-isolated-on-white-background-settings-transparent-sign.jpg";
label = "Coding For Fun 2020";

}else if (mode === "light") {

color = "ghostWhite";
image = "111605382-settings-icon-vector-isolated-on-white-background-settings-transparent-sign.jpg";
label = "Coding For Fun 2020";

}else{

color = "dimGray";
image = "111605382-settings-icon-vector-isolated-on-white-background-settings-transparent-sign.jpg";
label = "Coding For Fun 2020";

}

console.log(label);

document.getElementById("icon").src = image;
document.getElementById("theme").style.backgroundColor = color;
document.getElementById("contactus").style.backgroundColor = color;
document.getElementById("label").innerHTML = label;

}