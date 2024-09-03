const { addTask } = require('./add-task');

const args = process.argv;

if (process.argv.length === 2) {
    console.error('Expected at least one argument!');
    process.exit(1);
}

if (args[2] == 'add') {
    console.log(args)
    if (args[3]) {
        addTask(args[3]);
    } else {
        console.error('Task description must be provided to create Task!');
        exit(1);
    }
} 