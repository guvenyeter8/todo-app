let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
  const input = document.getElementById("taskInput");
  if (!input.value) return;

  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    list.innerHTML += `
      <li>
        ${task}
        <button onclick="deleteTask(${index})">❌</button>
      </li>
    `;
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

renderTasks();
