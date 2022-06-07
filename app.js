let button = document.querySelector("form button");

let section = document.querySelector("section");

button.addEventListener("click", (e) => {
  e.preventDefault(); //沒有要送到後端
  // 取得輸入的資料
  let form = e.target.parentElement;
  let todoText = form.children[0].value;
  let todoMonth = form.children[1].value;
  let todoDate = form.children[2].value;

  //把輸入的資料加進<section></section>
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

  section.appendChild(todo);
});
