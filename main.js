const completed = document.querySelector(".completed");
const section3 = document.querySelector(".section3");
const commondiv = document.querySelector(".commondiv");
const form2 = document.querySelectorAll(".form2");
const form1 = document.getElementById("form1");
const content11 = document.getElementById("content11");
const content22 = document.getElementById("content22");
const content33 = document.getElementById("content33");
const content44 = document.getElementById("content44");
const content55 = document.getElementById("content55");
const content66 = document.getElementById("content66");
const active = document.querySelector(".active");
const boxs1 = document.querySelector(".boxs1");
const boxs2 = document.querySelector(".boxs2");
const boxs3 = document.querySelector(".boxs3");
const boxs4 = document.querySelector(".boxs4");
const boxs5 = document.querySelector(".boxs5");
const boxs6 = document.querySelector(".boxs6");
function Todo(firstdiv) {
  this.form1 = firstdiv;
  this.checked = false;
}
let newitem = [];
function additems() {
  const firstdiv = form1.value;
  const allitems = new Todo(firstdiv);
  newitem.push(allitems);
}
let newitems;
let boxes = [boxs1, boxs2, boxs3, boxs4, boxs5, boxs6];
let boxs = [content11, content22, content33, content44, content55, content66];
function updatelist() {
  boxs.checked = false;
  newitems = newitem;
  for (let i = 0; i < newitems.length; i++) {
    const li = document.createElement("div");
    li.className = "my-list";
    li.innerText = newitems[i].form1;
    section3.addEventListener("click", () => deletealltodo(newitems, i));
    completed.addEventListener("click", () => deleteTodo(newitems, i));
    boxs[i].checked = true;
    boxes[i].appendChild(li);
  }
}
function deletealltodo(newitems, index) {
  newitems.splice(index, 1);
  boxs1.innerHTML = "";
  boxs2.innerHTML = "";
  boxs3.innerHTML = "";
  boxs4.innerHTML = "";
  boxs5.innerHTML = "";
  boxs6.innerHTML = "";
}
function deleteTodo() {
  boxs.forEach((content, index) => {
    if (content.checked) {
      boxes[index].innerHTML = "";
      newitems.splice(index, 1);
    }
  });
}
function AddTodo() {
  active.addEventListener("click", () => {
    boxs1.innerHTML = "";
    boxs2.innerHTML = "";
    boxs3.innerHTML = "";
    boxs4.innerHTML = "";
    boxs5.innerHTML = "";
    boxs6.innerHTML = "";
    additems();
    form1.value = "";
    updatelist();
  });
}
AddTodo();
