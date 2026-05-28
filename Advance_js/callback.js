
function callFriend(callback){

         console.log("YOu called Friend sucessfully");
         callback();
}

function talkFriend(callback){
   console.log("He agreed for the travel")
   callback();

}

function waytoSkd(callback){

        console.log("Now we are going to skd")
  
}

callFriend( () =>{
    talkFriend(()=>{
        waytoSkd();
    })
});

