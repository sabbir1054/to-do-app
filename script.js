const taskInput = document.getElementById('task-input');
const inputBtn = document.getElementById('input-btn');
const taskList = document.getElementById('task');
const completeList = document.getElementById('complete');
const resetBtn = document.getElementById('reset-btn');


//create task list

function createTask() {
    var li = document.createElement("li");
    li.innerText = taskInput.value;
    li.classList.add("task-item");
    taskList.appendChild(li);
    taskInput.value = "";

}


//create complete task list
taskList.addEventListener('click', function () {
    var taskEl = document.querySelector('.task-item');
    taskEl.parentNode.removeChild(taskEl);

    var completeEl = document.createElement("li");
    completeEl.innerText = taskEl.innerText;
    completeEl.classList.add("complete-item");
    completeList.appendChild(completeEl);
})

//delete complete task
completeList.addEventListener('click', function () {
    var deleteTask = document.querySelector('.complete-item');
    deleteTask.parentNode.removeChild(deleteTask);
})

//reset app
resetBtn.addEventListener("click", function (event) {
    taskList.parentNode.removeChild(taskList);
    completeList.parentNode.removeChild(completeList);
})