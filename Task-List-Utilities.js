// Task List Utilities
// You are writing helper functions for a task list. Each helper should return a result without mutating the original tasks array.

// should return a new array with a new incomplete task added.
function addTask(tasks, title) {
	const newTasks = [...tasks];
	const id = tasks.length <= 0 ? 1 : tasks[tasks.length - 1].id + 1;
	newTasks.push({
		id,
		title,
		completed: false
	});
	return newTasks;
}

// should return a new array where only the matching task is completed.
function completeTask(tasks, taskId) {
	return tasks.map(task => {
		if (task.id === taskId) {
			return {
				...task,
				completed: true
			};
		}
		return task;
	});
}

// should return a new array without the matching task
function removeTask(tasks, taskId) {
	const taskAfterRemove = tasks.filter(task => task.id !== taskId);
	return taskAfterRemove;
}

// should return the number of incomplete tasks.
function countIncompleteTasks(tasks) {
	let count = 0;
	tasks.forEach(task => {
		if (!task.completed) {
			count++;
		}
	});
	return count;
}

let tasks = [];

console.log(
	`\n to add tasks, simply type:\n tasks = addTask(tasks, '{tasks massage}' )\n`
);
console.log(
	`\n to complete tasks, simply type:\n tasks = completeTask(tasks, {taskId})\n`
);
console.log(
	`\n to remove tasks, simply type:\n tasks = removeTask(tasks, {taskId})\n`
);
console.log(
	`\n to count incomplete tasks, simply type:\n countIncompleteTasks(tasks)\n`
);
