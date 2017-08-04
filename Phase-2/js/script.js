function Task(task) {
    this.task = task;
    this.checked = false;
    this.buildHTML = function() {

    }
}


$(document).ready(function() {
    // Check for form submit
    $("newTask").submit(function(e) {
        e.preventDefault();
        // get new task
        var task = $("#task").val();


    });
});