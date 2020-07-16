function selectMode(mode){

var color = "ghostWhite";
var image = "111605382-settings-icon-vector-isolated-on-white-background-settings-transparent-sign.jpg";
var label = "Tasks";

if(mode === "dark"){

color = "darkSlateBlue";
image = "111605382-settings-icon-vector-isolated-on-white-background-settings-transparent-sign.jpg";
label = "Tasks";

}else if (mode === "light") {

color = "ghostWhite";
image = "111605382-settings-icon-vector-isolated-on-white-background-settings-transparent-sign.jpg";
label = "Tasks";

}else{

color = "dimGray";
image = "111605382-settings-icon-vector-isolated-on-white-background-settings-transparent-sign.jpg";
label = "Tasks";

}

console.log(label);

document.getElementById("icon").src = image;
document.getElementById("tasks").style.backgroundColor = color;
document.getElementById("label").innerHTML = label;

}