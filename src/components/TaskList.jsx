import { useEffect } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { findAllTasks } from "./../services/tasks";

const TaskList = () => {
	const [taskList, setTaskList] = useState([]);

	useEffect(() => {
		// get tasks from localstorage
		const allTasks = findAllTasks();
		// and initialize state
		setTaskList(allTasks);
	}, []);

	return (
		<div>
			<Navbar />
			<h5>My Task List</h5>
			<table className="table table-striped">
				<thead>
					<tr>
						<th>Id</th>
						<th>Title</th>
						<th>Description</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{taskList.map((tsk) => (
						<tr className="bg-danger">
							<td>{tsk.id}</td>
							<td>{tsk.title}</td>
							<td>{tsk.desc}</td>
							<td>
								<button className="btn btn-close" />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TaskList;
