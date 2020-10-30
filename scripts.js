function cal(val){

    document.getElementById("result").value+=val;
}

function output (){
    let x= document.getElementById("result").value;
    let y= eval(x);
    document.getElementById("result").value=y;
}

function clean (){

    document.getElementById("result").value="";
}

