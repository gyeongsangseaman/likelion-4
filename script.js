const toDoForm = document.querySelector("#toDoForm");
const toDoInput = document.querySelector("#toDoInput");
const toDoList = document.querySelector("#toDoList");

toDoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const toDoText = toDoInput.value.trim();
  if (toDoText === "") return;

  const toDoItem = document.createElement("li");
  toDoItem.innerText = toDoText;
  toDoItem.className = "toDoItem";

  const deletBtn = document.createElement("button");
  deletBtn.innerText = "삭제";
  deletBtn.className = "deletBtn";

  deletBtn.addEventListener("click", () => {
    toDoList.removeChild(toDoItem);
  });

  toDoItem.appendChild(deletBtn);
  toDoList.appendChild(toDoItem);
  toDoInput.value = "";
});
