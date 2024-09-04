const fs = require('fs');

const path = './tasks.json';

function getAllTasks() {
    if (!fs.existsSync(path)) {
        return [];
    }
    const tasks = fs.readFileSync(path);
    return tasks.length === 0 ? [] : JSON.parse(tasks);
}

function listTasks() {
    const tasks = getAllTasks();
    console.log(tasks);
}

function listTasksByStatus(status) {
    let tasks = getAllTasks();
    tasks = tasks.filter(task => task.status === status);
    if (tasks.length > 0) {
        console.log(tasks);
    }
}

function getNewId() {
    const tasks = getAllTasks();
    const totalTasks = tasks.length;
    if (totalTasks > 0) {
        return tasks[totalTasks - 1].id + 1;
    }
    return 1;
}

module.exports = { getNewId, listTasks, getAllTasks, listTasksByStatus };
