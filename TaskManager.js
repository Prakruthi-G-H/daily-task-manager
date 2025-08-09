const taskinput = document.getElementById("taskinput");
const addtaskbtn = document.getElementById("taskbtn");
const taskList = document.getElementById("taskList");
const clearAllBtn = document.getElementById("clearAllBtn");

addtaskbtn.addEventListener("click", function () {
    const text = taskinput.value.trim(); 

    if (text === "") {
        alert("Please enter a task");
        return;
    }

const li = document.createElement("li");
li.className = "task";

const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.className = "task-checkbox";

const span = document.createElement("span");
span.textContent = text;

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "❌";
deleteBtn.className = "delete-btn";

   deleteBtn.addEventListener('click', () => {
        li.remove();
      });

li.appendChild(checkbox);
li.appendChild(span);
li.appendChild(deleteBtn);

taskList.appendChild(li);


    taskinput.value = "";
});

clearAllBtn.addEventListener("click", function () {
    taskList.innerHTML = "";
});
