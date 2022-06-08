let button = document.querySelector("form button");

let section = document.querySelector("section");

button.addEventListener("click", (e) => {
  e.preventDefault(); //沒有要送到後端

  /*  取得輸入的資料 */
  let form = e.target.parentElement;
  let todoText = form.children[0].value;
  let todoMonth = form.children[1].value;
  let todoDate = form.children[2].value;

  // 如果輸入空的事項
  if (todoText === "") {
    alert("請輸入代辦事項!");
    // 跳出事件處理器
    return;
  }

  /* 把輸入的資料加進<section></section> */
  let todo = document.createElement("div");
  todo.classList.add("todo");

  let text = document.createElement("p");
  text.classList.add("todo-text");
  text.innerText = todoText;

  let time = document.createElement("p");
  time.classList.add("todo-time");
  time.innerText = `${todoMonth} / ${todoDate}`;

  todo.appendChild(text);
  todo.appendChild(time);

  /* 加進Font Awesome功能按鈕 */
  let checkButton = document.createElement("button");
  let trashButton = document.createElement("button");

  checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkButton.classList.add("checkButton");

  trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  trashButton.classList.add("trashButton");

  //設計按鈕劃刪除線功能
  checkButton.addEventListener("click", () => {
    // 如果沒有class:toggle就加進去 , 有就移除掉
    todo.classList.toggle("done");
  });
  // 設計按鈕移除功能
  trashButton.addEventListener("click", () => {
    // 設計移除時由大變小動畫
    todo.style.animation = "scaleDown 0.2s ease";
    addEventListener("animationend", () => {
      // 移除localStorage的資料
      let text = todo.children[0].innerText;
      let myListArray = JSON.parse(localStorage.getItem("list"));
      myListArray.forEach((item, index) => {
        if (item.todoText == text) {
          myListArray.splice(index, 1);
          localStorage.setItem("list", JSON.stringify(myListArray));
        }
      });

      todo.remove();
    });
  });

  todo.appendChild(checkButton);
  todo.appendChild(trashButton);

  // 把代辦事項的資料保存在瀏覽器的Local Storage
  let myTodo = {
    todoText: todoText,
    todoMonth: todoMonth,
    todoDate: todoDate,
  };

  let myList = localStorage.getItem("list");
  if (myList == null) {
    localStorage.setItem("list", JSON.stringify([myTodo]));
  } else {
    let myListArray = JSON.parse(myList);
    myListArray.push(myTodo);
    localStorage.setItem("list", JSON.stringify(myListArray));
  }

  // 新增完項目後輸入欄內容會清除

  e.target.parentElement.children[0].value = "";

  section.appendChild(todo);
});

// 網頁載入時
let myList = localStorage.getItem("list");
if (myList !== null) {
  let myListArray = JSON.parse(myList);

  myListArray.forEach((item) => {
    /* 把資料加進<section></section> */
    let todo = document.createElement("div");
    todo.classList.add("todo");

    let text = document.createElement("p");
    text.classList.add("todo-text");
    text.innerText = item.todoText;

    let time = document.createElement("p");
    time.classList.add("todo-time");
    time.innerText = `${item.todoMonth} / ${item.todoDate}`;

    todo.appendChild(text);
    todo.appendChild(time);

    /* 加進Font Awesome功能按鈕 */
    let checkButton = document.createElement("button");
    let trashButton = document.createElement("button");

    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add("checkButton");

    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashButton.classList.add("trashButton");

    //設計按鈕劃刪除線功能
    checkButton.addEventListener("click", () => {
      // 如果沒有class:toggle就加進去 , 有就移除掉
      todo.classList.toggle("done");
    });
    // 設計按鈕移除功能
    trashButton.addEventListener("click", () => {
      // 設計移除時由大變小動畫
      todo.style.animation = "scaleDown 0.2s ease";
      addEventListener("animationend", () => {
        // 移除localStorage的資料
        let text = todo.children[0].innerText;
        let myListArray = JSON.parse(localStorage.getItem("list"));
        myListArray.forEach((item, index) => {
          if (item.todoText == text) {
            myListArray.splice(index, 1);
            localStorage.setItem("list", JSON.stringify(myListArray));
          }
        });

        todo.remove();
      });
    });

    todo.appendChild(checkButton);
    todo.appendChild(trashButton);

    section.appendChild(todo);
  });
}
