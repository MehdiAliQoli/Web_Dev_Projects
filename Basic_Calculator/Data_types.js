const but1 = document.getElementsByClassName("but");
const screen = document.getElementById("screen");
const but_op = document.getElementsByClassName("but_op");
const clear = document.getElementById("clear");
const result = document.getElementById("result");
for(let i=0; i<but1.length; i++){
    but1[i].onclick = giveValue;
}
for(let i=0; i<but_op.length; i++){
    but_op[i].onclick = dothis;
}

clear.onclick =() =>{
screen.innerHTML = "";
} ;
result.onclick = () =>{
        screen.innerHTML = eval(screen.innerHTML);
    // const val = screen.innerHTML;
    // const a = 0;
    // const b = 0;
    // let check = false;
    // for(let i=0; i<val.length; i++){
    //     if(val[i] == "+" || val[i] =="-" || val[i] == "*"){
    //         if(check = false){
    //             true;
    //         }
    //         else{
    //             check = false;
    //         }
    //     }
    //     if(val[i] == "+" || val[i] =="-" || val[i] == "*"){
    //         if(a!=0 && b!=0){
    //             let op = val[i];
    //         }
    //         if(op=="+"){
    //             screen.innerHTML = a+b;
    //         }
    //         if(op=="-"){
    //             screen.innerHTML = a-b;
    //         }
    //         if(op=="*"){
    //             screen.innerHTML = a*b;
    //         }
    //     }
    //     if(check==false){
    //         a+=val[i];
    //     }
    //     else{
    //         b+=val[i];
    //     }

    // }
}

function giveValue(){
    const k =  this.innerHTML;
    screen.innerHTML += k;
} 
function dothis(){
    const k = this.innerHTML;
    const lastChar = screen.innerHTML[screen.innerHTML.length-1];

    

    if(lastChar == "+" || lastChar =="-" || lastChar == "*" ){
        if(this.innerHTML != lastChar){
        screen.innerHTML = screen.innerHTML.slice(0, -1) + this.innerHTML;
        }
        return;
    }

    screen.innerHTML += k;
}