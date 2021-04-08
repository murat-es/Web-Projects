var result=document.getElementById("result");

var x="";
var y="";
var op;
var control=false;

function clr(){
    result.innerHTML="&nbsp;";
    x="";
    y="";
}

function number(id){
    if(control){
        y+=id;
        second=result.innerHTML;
    }else{
        x+=id;
    }
    result.innerHTML+=id;
}

function operation(id){
    y="";
    control=true;
    op=id;
    result.innerHTML="&nbsp;";    
}

function equal(){
    control=false; 
    var firstNo=parseInt(x,10);
    var SecondNo=parseInt(y,10);

    if(op==="+"){
        result.innerHTML=firstNo+SecondNo;
    }
    else if(op==="-"){
        result.innerHTML=x-y;
    }
    else if(op==="*"){
        result.innerHTML=x*y;
    }
    else if(op==="/"){
        result.innerHTML=x/y;
    }

    x=parseInt(result.innerHTML);
    
   
}