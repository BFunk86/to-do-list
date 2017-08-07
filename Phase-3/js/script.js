/**
 * @author: Brandon Young
 *
 */
(function($) {
    /**
     * The newTask method builds the html for the task and puts everything inside an li tag.
     * It also adds the event handlers for the edit and delete button.
     * @returns {Element} li: An li tag containing the new task, checkbox, and buttons for remove and edit
     */
    var newTask = function (task, priority) {
        // li to hold everything
        var li = $("<li></li>");
        // Set class equal to the given task priority
        li.attr("class", priority);
        // The checkbox and todo label in a wrapper
        var taskWrapper = $("<div class='taskWrapper'><input type='checkbox'><label class='select strike' contenteditable='false'>" + task + "</div>");
        // edit button
        var edit = $("<div class='edit'>edit</div>");
        // add event handler to edit button
        edit.on("click", function () {
            // Get the corresponding label
            var label = $(this).parent().find("label.select");
            // set contenteditable to true
            label.attr("contenteditable", "true").focus();
            // Stop contenteditable on blur
            label.on("blur", function () {
                $(this).attr("contenteditable", false);
            });
        });
        // pipe seperator
        var pipe = $("<div class='pipe'> | </div>");
        // delete button
        var remove = $("<div class='remove'>delete</div>");
        // add event to handle removing the current task
        remove.on("click", function() {
            $(this).parent().remove();
        })

        li.append(taskWrapper);
        li.append(edit);
        li.append(pipe);
        li.append(remove);
        return li;
    };

    // The list that holds the Todos
    var list = $("#list");

    // Check for form submit
    $("#newTask").submit(function (e) {
        e.preventDefault();
        // get new task
        var task = $("#task").val();
        // Get priority
        var priority = $("input[name=priority]:checked").val();
        // Add Todo to list of Todos
        list.append(newTask(task, priority));
        // Clear the input box for new Todos
        this.reset();
    });

    $("#clear").on("click", function() {
        $("input[type=checkbox]:checked").parent().parent().remove();
    })

})(jQuery);