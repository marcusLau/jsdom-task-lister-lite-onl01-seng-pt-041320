const taskForm = document.querySelector("#create-task-form")
const list = document.querySelector("#tasks")

taskForm.addEventListener("submit", function (e) {
  // your code here
  e.preventDefault() // prevents from reloading

  const newTask = document.querySelector("#new-task-description").value

  list.innerHTML += `
    <li> ${newTask} </li>
    `
});
