const add = document.getElementById("Add_me")
const text = document.getElementById("text");
const item = document.getElementById("item");
add.onclick = () => {
  const list = document.createElement("li");
  const but1 = document.createElement("button");
  const input = document.createElement("input");
  const span = document.createElement("span"); // text goes here

  input.type = "checkbox";
  but1.innerHTML = "delete";
  but1.className = "del_but";
  span.textContent = text.value;
if(text.value !=''){
 list.appendChild(input); 
  list.appendChild(span);  
  list.appendChild(but1);  
  item.appendChild(list);
}
 

  text.value = "";t55t
}

item.addEventListener("click" , (e) =>{
   if (e.target.classList.contains("del_but")) {
    e.target.closest("li").remove(); 
  }
})