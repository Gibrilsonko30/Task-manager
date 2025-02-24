document.addEventListener("DOMContentLoaded", () => {
  const taskContainer = document.getElementById("task-container");
  const addTaskBtn = document.getElementById("add-task-btn");
  const logoutBtn = document.getElementById("logout");

  // Load tasks from localStorage
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function renderTasks() {
      taskContainer.innerHTML = "";
      tasks.forEach((task, index) => {
          const taskDiv = document.createElement("div");
          taskDiv.classList.add("task");
          taskDiv.innerHTML = `
              <p>${task}</p>
              <button class="delete-task" data-index="${index}">Delete</button>
          `;
          taskContainer.appendChild(taskDiv);
      });

      // Delete Task Event
      document.querySelectorAll(".delete-task").forEach(button => {
          button.addEventListener("click", (e) => {
              const index = e.target.getAttribute("data-index");
              tasks.splice(index, 1);
              localStorage.setItem("tasks", JSON.stringify(tasks));
              renderTasks();
          });
      });
  }

  // Add Task Event
  addTaskBtn.addEventListener("click", () => {
      const task = prompt("Enter your task:");
      if (task) {
          tasks.push(task);
          localStorage.setItem("tasks", JSON.stringify(tasks));
          renderTasks();
      }
  });

  // Logout Event
  logoutBtn.addEventListener("click", () => {
      window.location.href = "login.html";
  });

  // Initial Render
  renderTasks();
});
