
var randomNumber1=Math.random() *6;
randomNumber1+=1;
randomNumber1=Math.floor(randomNumber1);

var randomDiceImage1="dice"+randomNumber1+".png";

var randomImageSource1="images/"+randomDiceImage1;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource1);



var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDiceImage2="dice"+randomNumber2+".png";
var randomImageSource2="images/"+randomDiceImage2;
image2= document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="PLAYER-1 WINS😎😎";
} else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="PLAYER-2 WINS🤩🤩";
}else{
    document.querySelector("h1").innerHTML="REFRESH AGAIN 🙂😑";
}
