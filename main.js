document.addEventListener("DOMContentLoaded", () => {
  const completed = document.querySelector(".completed");
  const section3 = document.querySelector(".section3");
  const section11 = document.querySelector(".section11");
  const commondiv = document.querySelector(".commondiv");
  const container = document.getElementById("container");
  const container1 = document.getElementById("container1");
  const form1 = document.getElementById("form1");
  const content11 = document.getElementById("content11");
  const content22 = document.getElementById("content22");
  const content33 = document.getElementById("content33");
  const content44 = document.getElementById("content44");
  const content55 = document.getElementById("content55");
  const content66 = document.getElementById("content66");
  const darkbtn = document.getElementById("darkbtn");
  const darkbtn1 = document.getElementById("darkbtn1");
  const lightbtn = document.getElementById("lightbtn");
  const lightbtn1 = document.getElementById("lightbtn1");
  const active = document.querySelector(".active");
  const boxs1 = document.querySelector(".boxs1");
  const boxs2 = document.querySelector(".boxs2");
  const boxs3 = document.querySelector(".boxs3");
  const boxs4 = document.querySelector(".boxs4");
  const boxs5 = document.querySelector(".boxs5");
  const boxs6 = document.querySelector(".boxs6");

  lightbtn.addEventListener("click", (e) => {
    e.preventDefault();
    container.style.display = "none";
    container1.style.display = "flex";
  });
  lightbtn1.addEventListener("click", (e) => {
    e.preventDefault();
    container.style.display = "none";
    container1.style.display = "flex";
  });
  darkbtn1.addEventListener("click", (e) => {
    e.preventDefault();
    container.style.display = "flex";
    container1.style.display = "none";
  });
  darkbtn.addEventListener("click", (e) => {
    e.preventDefault();
    container.style.display = "flex";
    container1.style.display = "none";
  });
  function Todo(firstdiv) {
    this.form1 = firstdiv;
    this.deleted = false;
  }

  let item = [];
  let newitem = [];
  function additems() {
    const firstdiv = form1.value;
    const allitems = new Todo(firstdiv);
    let reused = false;
    for (let i = 0; i < newitem.length; i++) {
      if (newitem[i].deleted) {
        newitem[i] = allitems;
        reused = true;
        break;
      }
    }

    if (!reused) {
      newitem.push(allitems);
    }
  }

  let newitems;
  let boxes = [boxs1, boxs2, boxs3, boxs4, boxs5, boxs6];
  let boxs = [content11, content22, content33, content44, content55, content66];
  let compwin = parseInt(section11.textContent);
  function updatelist() {
    boxs.checked = false;
    newitems = newitem;
    let visibleindex = 0;
    for (let i = 0; i < newitems.length; i++) {
      if (newitems[i].deleted) continue;
      const li = document.createElement("div");
      li.className = "my-list";
      li.innerText = newitems[i].form1;
      let index = i;
      section3.addEventListener("click", () => deletealltodo(newitems, index));

      completed.addEventListener("click", () => deleteTodo(newitems, index));

      if ((boxs[index].checked = true)) {
        console.log("hello");
      }
      if (boxes[visibleindex]) {
        boxes[visibleindex].appendChild(li);
        visibleindex++;
      }
    }
    updatescore();
  }
  let games = false;
  function updatescore() {
    const activetodos = newitems.filter((todo) => !todo.deleted).length;
    section11.textContent = 6 - activetodos;
  }

  function saveTodo() {
    const todojson = JSON.stringify(newitems);
    localStorage.setItem("todos", todojson);
  }
  function deletealltodo(items, index) {
    items.splice(index, 1);
    boxs1.innerHTML = "";
    boxs2.innerHTML = "";
    boxs3.innerHTML = "";
    boxs4.innerHTML = "";
    boxs5.innerHTML = "";
    boxs6.innerHTML = "";
  }
  function deleteTodo(indexs) {
    games = false;
    if (newitems[indexs]) {
      updatelist();
    }
    boxs.forEach((content, index) => {
      if (content.checked) {
        newitems.splice(index, 1);
        boxes[index].innerHTML = "";
        games = true;
      }
    });
  }
  function AddTodo() {
    active.addEventListener("click", () => {
      additems();
      boxs1.innerHTML = "";
      boxs2.innerHTML = "";
      boxs3.innerHTML = "";
      boxs4.innerHTML = "";
      boxs5.innerHTML = "";
      boxs6.innerHTML = "";
      form1.value = "";
      updatelist();
      saveTodo();
    });
  }

  AddTodo();
});
document.addEventListener("DOMContentLoaded", () => {
  const complete = document.querySelector(".complete");
  const section31 = document.querySelector(".section31");
  const section111 = document.querySelector(".section111");
  const container = document.getElementById("container");
  const container1 = document.getElementById("container1");
  const form11 = document.getElementById("form11");
  const content111 = document.getElementById("content111");
  const content221 = document.getElementById("content221");
  const content331 = document.getElementById("content331");
  const content441 = document.getElementById("content441");
  const content551 = document.getElementById("content551");
  const content661 = document.getElementById("content661");
  const darkbtn = document.getElementById("darkbtn");
  const darkbtn1 = document.getElementById("darkbtn1");
  const lightbtn = document.getElementById("lightbtn");
  const lightbtn1 = document.getElementById("lightbtn1");
  const active1 = document.querySelector(".active1");
  const boxs11 = document.querySelector(".boxs11");
  const boxs21 = document.querySelector(".boxs21");
  const boxs31 = document.querySelector(".boxs31");
  const boxs41 = document.querySelector(".boxs41");
  const boxs51 = document.querySelector(".boxs51");
  const boxs61 = document.querySelector(".boxs61");

  lightbtn.addEventListener("click", (e) => {
    e.preventDefault();
    container.style.display = "none";
    container1.style.display = "flex";
  });
  lightbtn1.addEventListener("click", (e) => {
    e.preventDefault();
    container.style.display = "none";
    container1.style.display = "flex";
  });
  darkbtn1.addEventListener("click", (e) => {
    e.preventDefault();
    container.style.display = "flex";
    container1.style.display = "none";
  });
  darkbtn.addEventListener("click", (e) => {
    e.preventDefault();
    container.style.display = "flex";
    container1.style.display = "none";
  });
  function Todos(secondiv) {
    this.form11 = secondiv;
    this.deleted = false;
  }
  let item = [];
  function additem() {
    const secondiv = form11.value;
    const allitem = new Todos(secondiv);
    let used = false;
    for (let i = 0; i < item.length; i++) {
      if (item[i].deleted) {
        item[i] = allitem;
        used = true;
        break;
      }
    }

    if (!used) {
      item.push(allitem);
    }
  }
  let items;
  let secondbox = [boxs11, boxs21, boxs31, boxs41, boxs51, boxs61];
  let newboxs = [
    content111,
    content221,
    content331,
    content441,
    content551,
    content661,
  ];
  let playwin = parseInt(section111.textContent);
  function update() {
    newboxs.checked = false;
    items = item;
    let visibleindexs = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].deleted) continue;
      const li = document.createElement("div");
      li.className = "my-list";
      let index = i;
      li.innerText = items[i].form11;
      section31.addEventListener("click", () => deletealltodos(items, index));
      complete.addEventListener("click", () => deleteTodos(items, index));

      if ((newboxs[index].checked = true)) {
        console.log("hello");
      }
      if (secondbox[visibleindexs]) {
        secondbox[visibleindexs].appendChild(li);
        visibleindexs++;
      }
    }
    updatescores();
  }

  function updatescores() {
    const activetodos = items.filter((todo) => !todo.deleted).length;
    section111.textContent = 6 - activetodos;
  }
  function deletealltodos(items, index) {
    items.splice(index, 1);
    boxs11.innerHTML = "";
    boxs21.innerHTML = "";
    boxs31.innerHTML = "";
    boxs41.innerHTML = "";
    boxs51.innerHTML = "";
    boxs61.innerHTML = "";
  }
  function deleteTodos(indexs) {
    if (items[indexs]) {
      update();
    }
    newboxs.forEach((content, index) => {
      if (content.checked) {
        items.splice(index, 1);
        secondbox[index].innerHTML = "";
      }
    });
  }
  function saveTodo() {
    const todojson = JSON.stringify(items);
    localStorage.setItem("todos", todojson);
  }
  function AddTodos() {
    active1.addEventListener("click", () => {
      additem();
      boxs11.innerHTML = "";
      boxs21.innerHTML = "";
      boxs31.innerHTML = "";
      boxs41.innerHTML = "";
      boxs51.innerHTML = "";
      boxs61.innerHTML = "";
      form11.value = "";
      update();
      saveTodo();
    });
  }
  AddTodos();
});
