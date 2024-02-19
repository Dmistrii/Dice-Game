let randomNumber1 =(Math.floor(Math.random() * 6) + 1);
let imageSources = "images/"  + "dice" + randomNumber1 +".png";
let image1 = document.querySelectorAll("img")[0].setAttribute( "src", imageSources);

let randomNumber2 =(Math.floor(Math.random() * 6) + 1);
let imagesSources2 = "images/"  + "dice" + randomNumber2 +".png";
let image = document.querySelectorAll("img")[1].setAttribute( "src", imagesSources2);

if ( randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if ( randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML ="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="It's a tie!"
}