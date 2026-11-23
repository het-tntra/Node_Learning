
const tasks = [
    { id: 1, title: "Login", status: "done" },
    { id: 2, title: "Add task", status: "open" },
    { id: 3, title: "Update API", status: "open" }
];

function getTasksByStatus(tasks, status) {

    // If no status is selected, return all tasks
    if (status === "") {
        return tasks;
    }

    // Create an empty array for matching tasks
    let result = [];

    // Check each task one by one
    for (let i = 0; i < tasks.length; i++) {

        // Check if task status matches selected status
        if (tasks[i].status === status) {
            result.push(tasks[i]);
        }
    }

    // Return the matching tasks
    return result;
}

// Test 1: Open tasks
console.log("Open Tasks:");
console.log(getTasksByStatus(tasks, "open"));

// Test 2: Done tasks
console.log("Done Tasks:");
console.log(getTasksByStatus(tasks, "done"));

// Test 3: Empty status
console.log("All Tasks:");
console.log(getTasksByStatus(tasks, ""));


// Output:
// Open Tasks:
// [
//   { id: 2, title: 'Add task', status: 'open' },
//   { id: 3, title: 'Update API', status: 'open' }
// ]
// Done Tasks:
// [ { id: 1, title: 'Login', status: 'done' } ]
// All Tasks:
// [
//   { id: 1, title: 'Login', status: 'done' },
//   { id: 2, title: 'Add task', status: 'open' },
//   { id: 3, title: 'Update API', status: 'open' }
// ]
