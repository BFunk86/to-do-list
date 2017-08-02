/**
 * @author: Brandon Young
 *
 */
(function(){


    var list = document.getElementById("list");
    var input = document.getElementById("task");
    var form = document.getElementById('newTask');

    function Task(task) {
        this.task = task;
        this.checked = false;
        this.uncheck = function() {
            this.checked = false;
        };

        this.check = function() {
            this.checked = true;
        }
    }

    Task.prototype.addTask = function() {
        list.innerHTML += "<li>" + "<input type='checkbox'>" +  this.task + "</li>";
    };

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        var daTask = new Task(input.value);
        daTask.addTask();
        form.reset();
    })



}());