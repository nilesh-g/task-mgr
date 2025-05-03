export function taskSave(newTask) {
	const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
	const lastId = tasks.at(-1)?.id || 0;
	newTask.id = lastId + 1;
	tasks.push(newTask);
	localStorage.setItem("tasks", JSON.stringify(tasks));
	return newTask;
}

export function deleteTaskById(taskId) {
	let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
	if (tasks.length > 0) {
		tasks = tasks.filter((t) => t.id !== taskId);
		localStorage.setItem("tasks", JSON.stringify(tasks));
		return tasks;
	}
	return [];
}

export function findAllTasks() {
	return JSON.parse(localStorage.getItem("tasks") || "[]");
}

export function findTaskById(taskId) {
	let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
	if (tasks.length > 0) {
		tasks = tasks.filter((t) => t.id == taskId);
		return tasks[0];
	}
}
