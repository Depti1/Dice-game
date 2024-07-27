var randomnumber1 = Math.floor(Math.random()*6) + 1;
var image1path = "./images/"+"dice"+randomnumber1+".png";
var image1=document.querySelectorAll("img")[0];
//document.querySelector("img").setAttribute("src" , image1);
image1.setAttribute("src",image1path);

var randomnumber2 = Math.floor(Math.random()*6)+ 1;
var image2path="./images/"+"dice"+randomnumber2+".png";
var image2 = document.querySelectorAll("img")[1];
//document.querySelector("img").setAttribute("src",image2);
image2.setAttribute("src",image2path);

if(randomnumber1>randomnumber2){
    document.querySelector("p.para").innerHTML="player 1 won";
}
else if(randomnumber2>randomnumber1){
    document.querySelector("p.para").innerHTML="player 2 won"
    
}
else {
    document.querySelector("p.para").innerHTML=  "draw";  
}