var animals=["bear","cat","deer","elephant","fox","giraffe","lion","monkey","pig","rabbit",
             "bear","cat","deer","elephant","fox","giraffe","lion","monkey","pig","rabbit"];

var countMove=document.getElementById("move");
var seconds=document.getElementById("seconds");

function shuffleArray(animals) {
    for (var i = animals.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = animals[i];
        animals[i] = animals[j];
        animals[j] = temp;
    }
}
shuffleArray(animals);

var i;
for(i=1;i<21;i++){
    var btn=document.createElement("img");
    btn.setAttribute("src",`images/${animals[i-1]}.png`);
    document.getElementById(i).appendChild(btn);     
}

var moves=0;
var countImg=0;
var firstImg;
var secondImg;
var countOpened=0;
var isOpened=[];

function change(id){
    if(countImg<2 && document.getElementById(id).firstChild.style.visibility!=="visible" ){
        if(countImg==0){
            firstImg= document.getElementById(id).firstChild;
            document.getElementById(id).firstChild.style.visibility="visible";
            document.getElementById(id).style.pointerEvents="none";
        }
        else{
            secondImg= document.getElementById(id).firstChild;
            document.getElementById(id).firstChild.style.visibility="visible";
            document.getElementById(id).style.pointerEvents="none";
            countImg++;
            moves++;
            countMove.innerHTML="Moves: "+moves;
        }    
    }

    if(countImg==2){
        
        for(var i=1;i<21;i++){
        document.getElementById(i).style.pointerEvents="none";     
        }
       
        setTimeout(function(){
            for(var i=1;i<21;i++){
                document.getElementById(i).style.pointerEvents="auto";     
        }},500)

        setTimeout(function(){
            if(firstImg.src!== secondImg.src || firstImg.parentNode.id==secondImg.parentNode.id){
                firstImg.style.visibility="hidden";
                secondImg.style.visibility="hidden";
            }
            else{
                countOpened+=2;
                if(countOpened==20){
                    clearInterval(time);
                    window.alert("CONGRATULATIONS!");
                }
                
                firstImg.style.pointerEvents="none";
                secondImg.style.pointerEvents="none";

                isOpened.push=firstImg.parentNode.id;
                isOpened.push=secondImg.parentNode.id
            }
        }, 500);
       
        countImg=0;
    }else{
        countImg++;  
    }   
}

time=setInterval(incrmntSecond,1000);

timer=0;
function incrmntSecond(){
    seconds.innerHTML="Seconds: "+timer;
    timer++;
}

function newGame(){
    location.reload();
}