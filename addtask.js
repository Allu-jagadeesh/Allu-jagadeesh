function addTask() {
    var taskText = document.getElementById('newTask').value;

    if (taskText.trim() !== '') {
        var tasksContainer = document.getElementById('tasks');

        // Create a new task element
        var taskElement = document.createElement('div');
        taskElement.className = 'task';

        // Task text
        var taskTextElement = document.createElement('span');
        taskTextElement.textContent = taskText;

        // Delete button
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove';
        deleteButton.onclick = function() {
            tasksContainer.removeChild(taskElement);
        };

        // Append elements to the task div
        taskElement.appendChild(taskTextElement);
        taskElement.appendChild(deleteButton);

        // Append the task div to the tasks container
        tasksContainer.appendChild(taskElement);

        // Clear the input field
        document.getElementById('newTask').value = '';
    }
}
