const fs = require('fs');
const path = require('path');

const { getNewId, getAllTasks } = require('./list-tasks');

const filePath = path.join(__dirname, 'tasks.json');

function updateTask(id, field, value) {
    let tasks = getAllTasks() || [];
    let found = false;
    tasks = tasks.map(task => {
        if (task.id == id) {
            found = true;
            task[field] = value;
        }
        return task;
    });
    if (!found) {
        console.log('Task not found');
        return;
    } 
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 1));
    console.log(`Task updated successfully`);
}

module.exports = { updateTask };