var table=document.getElementsByTagName("td");
var turn=document.getElementById("turn");
document.getElementById("congratulations").style.display="none";


var changeXandO=true;
var countOpen=0;
function score(id){
    if(changeXandO){
        id.innerHTML="X";
        changeXandO=false;
        turn.innerHTML="O's turn";
    }
    else{
        id.innerHTML="O";
        changeXandO=true;
        turn.innerHTML="X's turn";
    }

    if(id.innerHTML==="X" || id.innerHTML==="O"){
        id.style.pointerEvents="none"; 
    }
    countOpen++;

    isDraw();
    isOver(); 
}

var possibilities=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

var btn = document.createElement("BUTTON");
btn.innerHTML="NEW GAME";

btn.onclick=function(){
    for(var i=0;i<table.length;i++){
        countOpen=0;
        document.getElementById("congratulations").style.display="none";
        table[i].style.pointerEvents="auto";
        table[i].innerHTML="";
        if(changeXandO){
            turn.innerHTML="X's turn";
        }else{
            turn.innerHTML="O's turn";
        }
        
    }
}

function isDraw(){
    if(countOpen===9){
        document.getElementById("congratulations").style.display="inline";
        document.getElementById("congratulations").innerHTML="Draw!";
        document.getElementById("congratulations").appendChild(btn);
    }
}

function isOver(){
    for(var i=0;i<8;i++){
        if(
            (table[possibilities[i][0]].innerHTML==="X" && table[possibilities[i][1]].innerHTML==="X" && 
            table[possibilities[i][2]].innerHTML==="X") 
        ||
            (table[possibilities[i][0]].innerHTML==="O" && table[possibilities[i][1]].innerHTML==="O" &&
            table[possibilities[i][2]].innerHTML==="O")
         )
         {
           
            document.getElementById("congratulations").style.display="inline";
            turn.innerHTML="Game Over";


            if(table[possibilities[i][0]].innerHTML==="X" ){
                document.getElementById("congratulations").innerHTML="X won!";
            }else{
                document.getElementById("congratulations").innerHTML="O won!";
            }
           
            document.getElementById("congratulations").appendChild(btn);
            

            for(var i=0;i<table.length;i++){
                table[i].style.pointerEvents="none";
            }
        }
    }
}