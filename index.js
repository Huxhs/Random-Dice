var ranNum1 = Math.floor(Math.random() * 6) + 1;
var ranDiceImg = "dice" + ranNum1 + ".png";
var ranImgSrc = "images/" + ranDiceImg;

var img1 =document.querySelectorAll("img")[0];
img1.setAttribute("src",ranImgSrc);

var ranNum2 = Math.floor(Math.random() * 6) + 1;
var ranImgSrc2 = "images/dice" + ranNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",ranImgSrc2);

if(ranNum1 > ranNum2){
	document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if (ranNum2 > ranNum1){
	document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
	document.querySelector("h1").innerHTML = "Draw";
}