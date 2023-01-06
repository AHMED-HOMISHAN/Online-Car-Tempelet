let menu = document.querySelector(".menu");
let container = document.querySelector(".container");
let list =document.querySelector(".list");
let icon=document.querySelector(".icon");
let input=document.querySelector("input");
let search=document.querySelector(".search");
let heart=document.querySelector(".heart");
let heart2=document.querySelector(".heart2");
let heart3=document.querySelector(".heart3");
let heart4=document.querySelector(".heart4");
let heart5=document.querySelector(".heart5");
let heart6=document.querySelector(".heart6");
let btn=document.querySelector(".upper");


document.getElementsByClassName("link").href="html/about us.html";

menu.onclick = function click(){
    menu.classList.toggle('active');
    list.classList.toggle('active');
}

window.onscroll=function(){
    if(window.scrollY>=600){
        btn.style.display='block';
        console.log("ahmed");
    }
    else{
        btn.style.display='none';  
    }
}
btn.onclick=function(){
    window.scrollTo({
        top:0,behavior:"smooth",
    });
}

icon.onclick =function click(){
    input.classList.toggle('active');
    search.classList.toggle('active');
    
}
heart.onclick =function click(){
    heart.classList.toggle('active');
}
heart2.onclick =function click(){
    heart2.classList.toggle('active');
}
heart3.onclick =function click(){
    heart3.classList.toggle('active');
}
heart4.onclick =function click(){
    heart4.classList.toggle('active');
}
heart5.onclick =function click(){
    heart5.classList.toggle('active');
}
heart6.onclick =function click(){
    heart6.classList.toggle('active');
}