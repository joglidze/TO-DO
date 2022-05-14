let input1 = document.querySelector(".input1");
let btn = document.querySelector(".add");
let list_cont = document.querySelector(".target");

btn.addEventListener("click", addTask);

list_cont.addEventListener("click", removeTask);

function addTask() {
  let newEl = document.createElement("div");
  newEl.innerHTML = `<div class="todo-cont">
   <div>${input1.value}</div>
   <div>
     <span><i class="fa-solid fa-check"></i></span>
   </div>
     
   </div>`;

  list_cont.appendChild(newEl);
  input1.value = " ";
}

function removeTask() {
  let remDiv = document.querySelector(".todo-cont");
  remDiv.remove();
}
