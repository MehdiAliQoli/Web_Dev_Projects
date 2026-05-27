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
  span.textContent = text.value; // text inside span

  list.appendChild(input); // 1. checkbox
  list.appendChild(span);  // 2. text
  list.appendChild(but1);  // 3. delete button
  item.appendChild(list);

  text.value = "";
}