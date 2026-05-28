
function callFriend(){
         return Promise.resolve(console.log("YOu called Friend sucessfully"));        
}
function talkFriend(){
   return Promise.resolve(console.log("He agreed for the travel"))
}
function waytoSkd(){
        return Promise.resolve(console.log("Now we are going to skd")) 
}

callFriend()
.then( ()=> talkFriend())
.then(()=> waytoSkd())



