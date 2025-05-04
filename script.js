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

  
   
}


window.onload = manageTasks;
