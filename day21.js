let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {

        let li = document.createElement("li");

        li.textContent = task + " ";

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            tasks.splice(index, 1);

            localStorage.setItem("tasks", JSON.stringify(tasks));

            displayTasks();
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

addButton.addEventListener("click", function() {

    let task = taskInput.value;

    if (task === "") {
        return;
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";

    displayTasks();
});

let clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", function() {
    tasks = [];

    localStorage.removeItem("tasks");

    displayTasks();
});

displayTasks();