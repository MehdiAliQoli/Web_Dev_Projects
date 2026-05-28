
function callFriend(){
   
    setTimeout(() => {
         console.log("YOu called Friend sucessfully");
    }, 4500);
}

function talkFriend(){
    setTimeout(() => {
        console.log("He agreed for the travel")
    }, 1900);
    

}

function waytoSkd(){
    
    setTimeout(() => {
        console.log("Now we are going to skd")
    }, 1500);
}

callFriend();
talkFriend();
waytoSkd();