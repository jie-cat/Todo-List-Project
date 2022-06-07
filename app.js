let button = document.querySelector("form button");

let section = document.querySelector("section");

button.addEventListener("click", (e) => {
  e.preventDefault(); //沒有要送到後端

  /*  取得輸入的資料 */
  let form = e.target.parentElement;
  let todoText = form.children[0].value;
  let todoMonth = form.children[1].value;
  let todoDate = form.children[2].value;

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
    todo.classList.toggle("toggle");
  });
  // 設計按鈕移除功能
  trashButton.addEventListener("click", () => {
    todo.remove();
  });

  todo.appendChild(checkButton);
  todo.appendChild(trashButton);

  section.appendChild(todo);
});
