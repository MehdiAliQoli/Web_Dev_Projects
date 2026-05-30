

async function dothis(){
const req = document.getElementById("input_txt");
const name = req.value;
//name.to_lower();
const responce = await fetch( `https://pokeapi.co/api/v2/pokemon/${name}` );
if(!responce.ok){
    alert("Error to fetch the data");
}
else{
   const data = await responce.json();
    const img = document.getElementById("Poki");
     img.src = data.sprites.front_default;
}
}
check = document.getElementById("see_but");
check.onclick = ()=>{
    dothis();
}

