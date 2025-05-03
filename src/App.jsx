import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import TaskForm from "./components/TaskForm";
import Home from "./components/Home";
import TaskList from "./components/TaskList";
import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<div className="container">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<LoginForm />} />
				<Route path="/register" element={<RegistrationForm />} />
				<Route path="/mytasks" element={<TaskList />} />
				<Route path="/newtask" element={<TaskForm />} />
			</Routes>
			<ToastContainer />
		</div>
	);
}

export default App;
