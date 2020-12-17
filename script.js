let blue=document.getElementById("blue");
        
let timer=document.getElementById("timer")
    

let start=new Date().getTime();
        
function makeShapeAppear(){
var top =Math.floor(Math.random()
                   *400);
var left=Math.floor(Math.random()*400);
    
var width=Math.floor((Math.random()*300)+100);
    
var height=Math.floor((Math.random()*300)+100);
    
function colorChange(){
    var letter='0123456789ABCDEF'.split('');
    console.log(letter);
    var color="#";

    for(let i=0 ; i < 6 ; i++){

color+=letter[Math.floor(Math.random()*16)];
}
    return color;
}
    
if(Math.random() > 0.5){
    blue.style.borderRadius="50%";
} else{
    blue.style.borderRadius="0";
}
    
    blue.style.top=top + "px";
    blue.style.left=left + "px";
    blue.style.width=width + "px";
    blue.style.height=height + "px";
    
    blue.style.backgroundColor=colorChange();
    blue.style.display="block";
start=new Date().getTime();
}
function appearAfterDelay() {setTimeout(makeShapeAppear, Math.random()*2000); } ;
    
    appearAfterDelay();
        
blue.onclick=function(){
    
    let end=new Date().getTime();
let time=(end-start)/1000;
timer.innerHTML=time;
blue.style.display="none";
    appearAfterDelay();
}