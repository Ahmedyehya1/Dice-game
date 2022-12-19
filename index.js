
document.querySelector(".btn-2").addEventListener("click",function name() {
var person1 = prompt("Please enter the name of first player");
var person2 = prompt("Please the name of second player");
document.querySelector("p.player1").innerHTML=person1
document.querySelector("p.player2").innerHTML=person2
} );

document.querySelector(".btn-1").addEventListener("click",function start() {
    buttonAnimation();
var person1=document.querySelector("p.player1").innerHTML
var person2=document.querySelector("p.player2").innerHTML
var randmNo1=Math.floor(Math.random()*6)+1;
var imgNo="dice"+randmNo1+".png"
var imgSrc="images/"+imgNo;
var imag1=document.querySelectorAll("img")[0];
imag1.setAttribute("src",imgSrc);

var randmNo2=Math.floor(Math.random()*6)+1;
var imgNo="dice"+randmNo2+".png"
var imgSrc="images/"+imgNo;
var imag1=document.querySelectorAll("img")[1];
imag1.setAttribute("src",imgSrc);


if(randmNo1>randmNo2){
    document.querySelector("h1").innerHTML=person1+" Wins!";
}
else if(randmNo2>randmNo1){
        document.querySelector("h1").innerHTML=person2+" Wins!";
}
else {
        document.querySelector("h1").innerHTML = "Draw!";
    }

    
} );

// ///////////////////////////////animation function//////////////////////////////////
function buttonAnimation() {document.querySelectorAll("img")[0].classList.add("img-shake");
document.querySelectorAll("img")[1].classList.add("img-shake");

setTimeout(function() {document.querySelectorAll("img")[0].classList.remove("img-shake");
}, 400);
setTimeout(function() {document.querySelectorAll("img")[1].classList.remove("img-shake");
}, 400);

    
}


