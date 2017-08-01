/**
 * @author: Brandon Young
 *
 */

// unordered list that holds the to-do's
var ul = document.getElementById("list");
// input box for new tasks
var input = document.getElementById("task");
// form holding input and submit button
var form = document.getElementById('newTask');

/**
 * The addTask method is used to add a new task to the To-do List
 * @param task: The task to add to the To-do list
 */
function addTask(task) {
    // new li to put everything in
    var li = document.createElement("li");
    // Checkbox for checking item off
    var checkBox = document.createElement("input");
    // label for task text
    var label = document.createElement("label");
    // button to remove task
    var removeBtn = document.createElement("span");
    // add remove class to button
    removeBtn.setAttribute("class", "remove");
    // Add text to remove button
    removeBtn.innerHTML = "&times";
    // add task to label element
    label.innerHTML += task;
    // set attributes for label element
    label.setAttribute("class", "select");
    // set attribute for checkbox
    checkBox.setAttribute("type", "checkbox");
    // add event handler to the remove button
    removeBtn.addEventListener("click", function(){
        li.style.display = "none";
    });

    // Build the new task
    li.appendChild(checkBox);
    li.appendChild(label);
    li.appendChild(removeBtn);
    ul.appendChild(li);
} // end addTask

// Add event handler to add new tasks to the ul
form.addEventListener("submit", function(event){
    event.preventDefault();
    addTask(input.value);
    form.reset();
});
