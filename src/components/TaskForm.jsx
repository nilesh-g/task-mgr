import { useState } from "react";
import Navbar from "./Navbar";
import { taskSave } from "../services/tasks";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const TaskForm = () => {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const navigate = useNavigate();

	const handletitleChange = (e) => {
		setTitle(e.target.value);
	};
	const handledescChange = (e) => setDesc(e.target.value);

	const handleSumbitClick = (e) => {
		const newTask = taskSave({ title, desc });
		if (newTask) {
			toast.success("Task Saved:" + JSON.stringify(newTask));
			navigate("/mytasks");
		} else toast.error("Task Save Failed.");
	};

	return (
		<div>
			<Navbar />
			<div className="col-6 border border-2 shadow p-5 m-3">
				<div className="mb-3 text-center">
					<h2>Task Form</h2>
				</div>
				<div className="mb-3">
					<label className="form-label">Title:</label>
					<input
						className="form-control"
						name="title"
						type="text"
						onChange={handletitleChange}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Description:</label>
					<input
						className="form-control"
						name="desc"
						type="text"
						onChange={handledescChange}
					/>
				</div>
				<div className="row">
					<button
						className="mx-3 col btn btn-primary"
						onClick={handleSumbitClick}
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default TaskForm;
