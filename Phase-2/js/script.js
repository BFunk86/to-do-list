function Todo(task) {
    // The task to be added to the Todo
    this.task = task;
    // This keeps track of whether or not the task is completed
    this.checked = false;
    this.uncheck = function() {
        this.checked = false;
    };
    this.check = function() {
        this.checked = true;
    };
};

/**
 * The buildHTML element builds the html for the task and puts everything in a li tag.
 * @returns {Element} li: An li tag containing the new task, checkbox, and buttons for remove and edit
 */
Todo.prototype.buildHTML = function() {
    // li to hold everything
    var li = $("<li></li>");
    // add checkbox and label for task
    li.append('<div class="taskWrapper"><input id="check" type="checkbox"><label class="select" contenteditable="false">' + this.task + '</label></div>');
    // add edit and remove button
    li.append('<div class="outerEdit"><span class="innerEdit">✏</span></div><div class="remove">×</div>');
    return li;
};


$(document).ready(function() {
    // List of ToDos
    var list = [];
    // incomplete that holds Todos not yet completed
    var incomplete = $("#list");
    // incomplete that holds completed Todos
    var complete = $("#complete");

    // Check for form submit
    $("#newTask").submit(function(e) {
        e.preventDefault();
        // get new task
        var task = $("#task").val();
        // Create new Todo
        var newTodo = new Todo(task);
        // Add Todo to list of Todos
        list.push( newTodo );
        display();
        // Clear the input box
        this.reset();
    });

    // display the tasks on screen
    var display = function() {
        // Empty both lists so they don't get doubled
        incomplete.empty();
        complete.empty();
        // Loop through list of Todos and output to screen
        $.each(list, function(i, val) {
            if(val.checked === false){
                incomplete.append(val.buildHTML());
            } else {
                complete.append(val.buildHTML());
            }
        });
    };

    $("#check").on("click", function() {
        this.checked = true;
        display();
    });
});