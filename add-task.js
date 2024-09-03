const fs = require('fs');
const path = require('path');

const { getNewId, getAllTasks } = require('./list-tasks');

const filePath = path.join(__dirname, 'tasks.json');

function addTask(description) {
    const task = {
        'id': getNewId(),
        'description': description,
        'status': "todo",
        'createdAt': Date.now(),
        'updatedAt': Date.now()
    };
    const tasks = getAllTasks() || [];
    tasks.push(task);
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 1));
}

module.exports = { addTask }