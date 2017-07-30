/**
 * @author: Brandon Young
 *
 */

/**
 * @author: Brandon Young
 *
 */

/**
 * The addTask method is used to add a new task to the To-do List
 * @param task: The task to add to the To-do list
 */
function addTask(task) {
    var taskList = document.getElementById("list");
    var count = taskList.childNodes.length + 1;
    var newNode = document.createElement("li");
    var checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", "task_" + count.toString());
    checkBox.setAttribute("class", "checkbox");
    var label = document.createElement("label");
    label.setAttribute("for", "task_" + count.toString());
    var newTask = document.createTextNode(task);
    // add the new task to the label
    label.appendChild(newTask);
    newNode.appendChild(checkBox);
    taskList.appendChild(newNode);
    checkBox.insertAdjacentElement("afterend", label);
} // end addTask

/**
 * The getTask method gets the task from the input box
 * @returns {string|Number}: the task entered in the input box
 */
function getTask() {
    var task = document.getElementById("task").value;
    return task;
}

function taskCount() {
    var taskList = document.getElementById("list");
    var count = 0;
    for (var i = 0; i < taskList.childNodes.length; i++) {

    }
}

/**
 * The removeTask method is used to remove a task from the To-do
 * list by adding a strikethrough to the task.
 * @param task: The task to add a strikethrough to
 */
function removeTask(task) {
    task.strike();
} // end removeTask


var form = document.getElementById('newTask');

//form.onsubmit = function

form.addEventListener("submit", function(event){
    event.preventDefault();
    addTask(getTask());
    form.reset();
});

var checkbox