let c1=document.getElementById("c1");
let c2=document.getElementById("c2");
let c3=document.getElementById("c3");
let c4=document.getElementById("c4");
let c5=document.getElementById("c5");
let c6=document.getElementById("c6");
let c7=document.getElementById("c7");
let c8=document.getElementById("c8");
let b1=document.getElementById("a");
let b2=document.getElementById("s");
let b3=document.getElementById("d");
let b4=document.getElementById("f");
let b5=document.getElementById("g");
let b6=document.getElementById("h");
let b7=document.getElementById("j");
let b8=document.getElementById("k");
let dog=document.getElementById("dog")
let button=document.getElementById("barra")
b1.addEventListener("click", () =>{
    c1.play();
});
b2.addEventListener("click", () =>{
    c2.play();
});
b3.addEventListener("click", () =>{
    c3.play();
});
b4.addEventListener("click", () =>{
    c4.play();
});
b5.addEventListener("click", () =>{
    c5.play();
});
b6.addEventListener("click", () =>{
    c6.play();
});
b7.addEventListener("click", () =>{
    c7.play();
});
b8.addEventListener("click", () =>{
    c8.play();
});
let playing=false;
button.addEventListener("click", () =>{
    if(playing)
    {
        dog.pause();
        playing=false;
    }
    else
    {
        dog.play();
        playing=true;
    }
});