#!/usr/bin/env node

const { addTask } = require('./add-task');
const { listTasks, listTasksByStatus } = require('./list-tasks');
const { updateTask } = require('./update-task');
const { deleteTask } = require('./delete-task');

const args = process.argv;

if (args[2] == 'add') {
    if (args[3]) {
        addTask(args[3]);
    } else {
        console.error('Usage: add <description>');
        process.exit(1);
    }
} else if (args[2] == 'list') {
    if (args.length == 3) {
        listTasks();
    } else if (args.length === 4) {
        listTasksByStatus(args[3]);
    }
} else if (args[2] == 'update') {
    if (args[3] && args[4]) {
        updateTask(args[3], "description", args[4]);
    } else {
        console.error('Usage: update <id> <description>');
        process.exit(1);
    }
} else if (args[2] == 'mark-in-progress') {
    if (args[3]) {
        updateTask(args[3], "status", "in-progress");
    } else {
        console.error('Usage: mark-in-progress <id>');
        process.exit(1);
    }
} else if (args[2] == 'mark-done') {
    if (args[3]) {
        updateTask(args[3], "status", "done");
    } else {
        console.error('Usage: mark-done <id>');
        process.exit(1);
    }
} else if (args[2] == 'delete') {
    if (args[3]) {
        deleteTask(args[3]);
    } else {
        console.error('Usage: delete <id>');
        process.exit(1);
    }
} else if (args[2] == 'list-task') {
    listTasks();
} 