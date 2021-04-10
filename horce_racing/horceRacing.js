var horse1=document.getElementById("horse1");
var horse2=document.getElementById("horse2");
var horse3=document.getElementById("horse3");
var horse4=document.getElementById("horse4");

var finish=document.getElementById("f2").offsetLeft-115;

var speed1=0,speed2=0,speed3=0,speed4=0;
var whoWin=false;


var randomHorceSpeed=function(){
   var random=Math.random()*150;
    
    return random;
}

function start(){
    run =setInterval(run,1000);

}
var run=function(){
    horseFirst();
    horseSecond();
    horseThird();
    horseFourth();
}

function horseFirst(){
 
        speed1+=randomHorceSpeed();
        if(speed1>=finish){
            speed1=finish;
            clearInterval(run);
            horse1.style.marginLeft=finish+"px";

            alert("Horse 1 won!");
            window.location.reload(); 
            horse1.style.marginLeft=0+"px";
        }
        horse1.style.marginLeft=speed1+"px";
 
}
function horseSecond(){
  
        speed2+=randomHorceSpeed();
        if(speed2>=finish){
            speed2=finish;
            clearInterval(run);
            horse2.style.marginLeft=finish+"px";

            alert("Horse 2 won!");
            window.location.reload(); 
            horse2.style.marginLeft=0+"px";

        }
        horse2.style.marginLeft=speed2+"px";

   
}
function horseThird(){
  
        speed3+=randomHorceSpeed();
        if(speed3>=finish){
            speed3=finish;
            clearInterval(run);
            horse3.style.marginLeft=finish+"px";
            alert("Horse 3 won!");
            window.location.reload(); 
            horse3.style.marginLeft=0+"px";
        }
        horse3.style.marginLeft=speed3+"px";

  
}
function horseFourth(){
  
        speed4+=randomHorceSpeed();
        if(speed4>=finish){
            speed4=finish;
            clearInterval(run);
            horse4.style.marginLeft=finish+"px";
            alert("Horse 4 won!");
            window.location.reload(); 
            horse4.style.marginLeft=0+"px";

        }
        horse4.style.marginLeft=speed4+"px";
    
}