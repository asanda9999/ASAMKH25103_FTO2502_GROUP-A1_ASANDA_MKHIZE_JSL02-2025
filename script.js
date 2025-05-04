// Function to manage task creation and status checking
function manageTasks() {
    const validStatuses = ["todo", "doing", "done"];
    const tasks = [];

    // Function to prompt the user for task details
    function getTaskDetails(taskNumber) {

        // Prompt user to enter the title and description of the task
        const title = prompt(`Enter the title for Task ${taskNumber}:`);
        const description = prompt(`Enter the description for Task ${taskNumber}:`);

        let status;

        // Keep prompting the user until a valid status is entered

        while (true) {
            status = prompt(`Enter the status for Task ${taskNumber} (todo, doing, done):`).toLowerCase();
            
            if (validStatuses.includes(status)) {
                break;
            } else {
                // Show alert if status is invalid
                alert("Invalid status entered. Please enter 'todo', 'doing', or 'done'.");
            }
        }

        // Return the task details as an object
        return { title, description, status };
    }

    // Loop to collect details for two tasks
    for (let taskNumber = 1; taskNumber <= 2; taskNumber++) {
    
        tasks.push(getTaskDetails(taskNumber));
    }

    // Loop through all tasks and print a message based on their status
    tasks.forEach(task => {
        if (task.status === "done") {
            console.log(`Title: "${task.title}" status: done`);
        } else {
            console.log(`Title: "${task.title}" not completed, let's get to work!`);
        }
    });
}

// Run the manageTasks function when the page is fully loaded
window.onload = manageTasks;
