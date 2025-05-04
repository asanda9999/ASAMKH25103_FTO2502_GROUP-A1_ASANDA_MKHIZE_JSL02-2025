function manageTasks() {
    const validStatuses = ["todo", "doing", "done"];
    const tasks = [];

   
    function getTaskDetails(taskNumber) {
        const title = prompt(`Enter the title for Task ${taskNumber}:`);
        const description = prompt(`Enter the description for Task ${taskNumber}:`);

        let status;
        
        while (true) {
            status = prompt(`Enter the status for Task ${taskNumber} (todo, doing, done):`).toLowerCase();
            if (validStatuses.includes(status)) {
               
                break;
            } else {
                
                alert("Invalid status entered. Please enter 'todo', 'doing', or 'done'.");
            }
        }

        return { title, description, status };
    }

  
    for (let taskNumber = 1; taskNumber <= 2; taskNumber++) {
        tasks.push(getTaskDetails(taskNumber));
    }


    tasks.forEach(task => {
        if (task.status === "done") {
            console.log(` Title : "${task.title}" status: done`);
        } else if (task.status === "todo" || task.status === "doing") {
            console.log(` Title : "${task.title}" not completed, let's get to work!`);
        }
    });
}


window.onload = manageTasks;
