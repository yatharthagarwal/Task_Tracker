#!/usr/bin/env node

const { addTask } = require('./add-task');
const { listTasks } = require('./list-tasks');

const args = process.argv;

if (args[2] == 'add-task') {
    if (args[3]) {
        addTask(args[3]);
    } else {
        console.error('Usage: add-task <description>');
        process.exit(1);
    }
} else if (args[2] == 'list-task') {
    listTasks();
} 