function selectMode(mode){

var color = "ghostWhite";
var image = "website-construction-page-modern-illustration-flat-style_172533-131.jpg";
var label = "Dashboard";

if(mode === "dark"){

color = "darkSlateBlue";
image = "website-construction-page-modern-illustration-flat-style_172533-131.jpg";
label = "Dashboard";

}else if (mode === "light") {

color = "ghostWhite";
image = "website-construction-page-modern-illustration-flat-style_172533-131.jpg";
label = "Dashboard";

}else{

color = "dimGray";
image = "website-construction-page-modern-illustration-flat-style_172533-131.jpg";
label = "Dashboard";

}

console.log(label);

document.getElementById("icon").src = image;
document.getElementById("dashboard").style.backgroundColor = color;
document.getElementById("label").innerHTML = label;

}