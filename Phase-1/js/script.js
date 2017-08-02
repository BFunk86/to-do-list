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
    // wrapper for label and checkBox
    var wrapper = document.createElement("div");
    // button to remove task
    var removeBtn = document.createElement("span");
    // button to edit a task
    var editBtn = document.createElement("span");
    // set the class for edit button
    editBtn.setAttribute("class", "edit");
    // Add pencil icon to edit button
    editBtn.innerHTML = "&#x270F;";
    // Add focus to task on edit button click and enable contenteditable
    editBtn.addEventListener("click", function(){
        label.setAttribute("contenteditable", "true");
        label.focus();
    });
    // give wrapper for input and checkbox class name
    wrapper.setAttribute("class", "taskWrapper");

    // Stop allowing editable task when click away
    label.addEventListener("blur", function(){
        label.setAttribute("contenteditable", "false");
    });

    // add remove class to button
    removeBtn.setAttribute("class", "remove");
    // Add text to remove button
    removeBtn.innerHTML = "&times";
    // add task to label element
    label.innerHTML += task;
    // set attributes for label element
    label.setAttribute("class", "select");
    // set contenteditable to false so it can be edited later
    label.setAttribute("contenteditable", "false");
    // set attribute for checkbox
    checkBox.setAttribute("type", "checkbox");
    // add event handler to the remove button
    removeBtn.addEventListener("click", function(){
        li.style.display = "none";
    });

    // Build the new task
    li.appendChild(wrapper);
    wrapper.appendChild(checkBox);
    wrapper.appendChild(label);
    //li.appendChild(checkBox);
    //li.appendChild(label);
    li.appendChild(editBtn);
    li.appendChild(removeBtn);
    ul.appendChild(li);
} // end addTask

// Add event handler to add new tasks to the ul
form.addEventListener("submit", function(event){
    event.preventDefault();
    addTask(input.value);
    form.reset();
});
