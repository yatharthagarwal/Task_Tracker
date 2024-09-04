const fs = require('fs');
const path = require('path');

const { getAllTasks } = require('./list-tasks');

const filePath = path.join(__dirname, 'tasks.json');

function deleteTask(id) {
    let tasks = getAllTasks();
    tasks = tasks.filter(task => task.id != id);
    if (!fs.existsSync(filePath)) {
        console.log('Id not found');
        return;
    }
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 1));
    console.log(`Task deleted successfully (ID: ${id})`);
}

module.exports = { deleteTask };