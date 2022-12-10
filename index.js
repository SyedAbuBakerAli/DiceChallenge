var randomNumber1 = Math.floor(Math.random()*6) + 1;  // random between 1 to 6
var randomDiceImage = "dice"+randomNumber1+".png";    // dice Image 1 to 6

var randomSourceImage = "images/"+ randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomSourceImage);

// random Image for Second

var randomNumber2 = Math.floor(Math.random() * 6) +1;
var randomDiceImage2 = "dice"+randomNumber2+".png";
var randomSourceImage2 = "images/"+randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomSourceImage2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Win!";
}else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Win!";
}else{
  document.querySelector("h1").innerHTML = "Draw!";
}
