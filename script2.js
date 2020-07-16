function selectMode(mode){

var color = "ghostWhite";
var image = "111605382-settings-icon-vector-isolated-on-white-background-settings-transparent-sign.jpg";
var label = "Leaderboard";

if(mode === "dark"){

color = "darkSlateBlue";
image = "111605382-settings-icon-vector-isolated-on-white-background-settings-transparent-sign.jpg";
label = "Leaderboard";

}else if (mode === "light") {

color = "ghostWhite";
image = "111605382-settings-icon-vector-isolated-on-white-background-settings-transparent-sign.jpg";
label = "Leaderboard";

}else{

color = "dimGray";
image = "111605382-settings-icon-vector-isolated-on-white-background-settings-transparent-sign.jpg";
label = "Leaderboard";

}

console.log(label);

document.getElementById("icon").src = image;
document.getElementById("leaderboard").style.backgroundColor = color;
document.getElementById("label").innerHTML = label;

}