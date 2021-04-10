var milliseconds=document.getElementById("milliseconds");
var seconds=document.getElementById("seconds");
var minutes=document.getElementById("minutes");
var hours=document.getElementById("hours");


function start(){
    time=setInterval(time,10);
}
function stop(){
    clearInterval(time);
}

function reset(){
    milliseconds.innerHTML="00";
    seconds.innerHTML="00";
    minutes.innerHTML="00";
    hours.innerHTML="00";
}

function time(){
    if(milliseconds.innerHTML<60){
        var ms=milliseconds.innerHTML;
        ms=parseInt(ms);
        ms+=1;
        
        if(ms<10){
            milliseconds.innerHTML="0"+ms;
        }else{
            milliseconds.innerHTML=ms;
        }
    }

    if(milliseconds.innerHTML>=60){
        var s=seconds.innerHTML;
        s=parseInt(s);
        s+=1;
        if(s<10){
            seconds.innerHTML="0"+s;
        }else{
            seconds.innerHTML=s;
        }
        milliseconds.innerHTML="00";
    }

    if(seconds.innerHTML>=60){
        var m=minutes.innerHTML;
        m=parseInt(m);
        m+=1;
        if(m<10){
            minutes.innerHTML="0"+m;
        }else{
            minutes.innerHTML=m;
        }
        seconds.innerHTML="00";
    }

    if(minutes.innerHTML>=60){
        var h=hours.innerHTML;
        h=parseInt(h);
        h+=1;
        if(h<10){
            hours.innerHTML="0"+h;
        }else{
            hours.innerHTML=h;
        }
        hours.innerHTML=h;
        minutes.innerHTML="00";
    }
}