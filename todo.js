// document.getElementById("task-Name").addEventListener("click", () => {
//   const taskText = prompt("------------------------");

//     if (taskText) {
//       createTaskElement(taskText, "to-do");
//     }
//   });
   


//   function createTaskElement(text, columnId) {
//     const task = document.createElement("div");
//     task.classList.add("task");
   
//     const taskContent = document.createElement("span");
//     taskContent.textContent = text;
   
//     const taskButtons = document.createElement("div");
//     taskButtons.classList.add("task-buttons");
   
//     const editButton = document.createElement("button");
//     editButton.textContent = "Edit";
//     editButton.addEventListener("click", () => {
//       const newText = prompt("Edit task description:", taskContent.textContent);
//       if (newText) {
//         taskContent.textContent = newText;
//       }
//     });
   


//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.addEventListener("click", () => {
//       task.remove();
//     });
   

    
//     taskButtons.appendChild(editButton);
//     taskButtons.appendChild(deleteButton);
//     task.appendChild(taskContent);
//     task.appendChild(taskButtons);
   
//     document.getElementById(columnId).appendChild(task);
//   }

//   function addTodo() {
//     const modal = document.querySelector("#modal");
//     modal.style.display = "block";
//   }
   
  

 
//   function saveTodo() {
//    const input = document.getElementById("taskName");
//   }








const STATUS = "TODO" || "DONE";
 
let todos = [];
 
// Todo add
function addOne(newTodo) {
  todos.push(newTodo);
}
 
function editStatus(index, status) {
  let item = todos[index];
  item.status = status;
  render();
}
 
// Name update: Func
function editName(index, name) {
  let item = todos[index];
  item.name = name;
  render();
}
 
// Todo delete one item
function deleteOne(index) {
  let arr = [];
  for (let i = 0; i < todos.length; i++) {
    if (i !== index) {
      arr.push(todos[i]);
    }
  }
  todos = arr;
  render();
}
 
// Todo delete all
function deleteAll() {
  todos = [];
  render();
}
 
// Count DONE
function countDone() {
  let count = 0;
  for (let i = 0; i < todos.length; i++) {
    let item = todos[i];
    if (item.status === "DONE") {
      count++;
    }
  }
  return count;
}
 
// RUNNING APPLICATION
// selecter go bruhhhhh
function render() {
  const todoList = document.querySelector("#todo-tasks");
  const inProgressList = document.querySelector("#in-progress-tasks");
  const doneList = document.querySelector("#done-tasks");
  const blockedList = document.querySelector("#blocked-tasks");
 
  todoList.innerHTML = "";
  inProgressList.innerHTML = "";
  doneList.innerHTML = "";
  blockedList.innerHTML = "";
  // inner html
 
  for (let i = 0; i < todos.length; i++) {
    const item = todos[i];
    const element = document.createElement("div");
    element.classList.add("todo-item");
 
    // Create task name element
    const titleEl = document.createElement("p");
    titleEl.innerText = item.name;
 
    // Create edit button
    const editBtnEl = document.createElement("i");
    editBtnEl.classList.add("fa-solid", "fa-pen");
    editBtnEl.onclick = function () {
      const newName = prompt("Enter new name");
      editName(i, newName);
    };
 
    // Create delete button
    const deleteBtnEl = document.createElement("i");
    deleteBtnEl.classList.add("fa-trash", "fa-solid");
    deleteBtnEl.onclick = function () {
      deleteOne(i);
    };
 
    // Append elements to task container
 
    element.appendChild(titleEl);
    element.appendChild(editBtnEl);
    element.appendChild(deleteBtnEl);
 
    //if selecter
    if (item.status === "todo") {
      todoList.appendChild(element);
    } else if (item.status === "in-progress") {
      inProgressList.appendChild(element);
    } else if (item.status === "Done") {
      doneList.appendChild(element);
    } else if (item.status === "Blocked") {
      blockedList.appendChild(element);
    }
  }
  // if selecter end
}
 
// Add new task (show modal)
function addTask() {
  const modal = document.querySelector("#modal");
  modal.style.display = "block"; // Show modal
}
 
// Save task and hide modal
function saveTask() {
  const inputValue = document.getElementById("task-name").value;
  const taskStatus = document.getElementById("task-status").value;
 
  // Push new task to todos array
  todos.push({
    name: inputValue,
    status: taskStatus,
  });
 
  // Render tasks and close the modal
  render();
  const modal = document.querySelector("#modal");
  modal.style.display = "none"; // Hide modal
 
  document.getElementById("task-name").value = "";
  document.getElementById("task-status").value = "todo";
}
 
// Close modal
window.onclick = function (event) {
  const modal = document.querySelector("#modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
 
