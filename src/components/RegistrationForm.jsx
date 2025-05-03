import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { userSave } from "../services/users";

const RegistrationForm = () => {
	// maintain complex state as JS object (not as individual variables)
	const [info, setInfo] = useState({
		name: "",
		email: "",
		passwd: "",
		mobile: "",
		address: "",
	});

	const navigate = useNavigate();

	const handleEmailChange = (e) => {
		//const newInfo = { email: e.target.value, name: info.name, passwd: info.passwd, mobile: info.mobile, address: info.address };
		const newInfo = { ...info, email: e.target.value };
		setInfo(newInfo);
	};

	const handlePasswdChange = (e) =>
		setInfo({ ...info, passwd: e.target.value });

	/*
	const handleNameChange = (e) =>
		setInfo({ ...info, name: e.target.value });
	const handleMobileChange = (e) =>
		setInfo({ ...info, mobile: e.target.value });
	const handleAddressChange = (e) =>
		setInfo({ ...info, address: e.target.value });
	*/
	const handleInputFieldChange = (e) =>
		setInfo({ ...info, [e.target.name]: e.target.value });

	const handleSignUpClick = (e) => {
		// validate all input fields. if any problem, show error
		let valid = true;
		if (!info.email || info.email.length == 0) {
			toast.error("Email cannot be empty.");
			valid = false;
		}
		if (!info.passwd || info.passwd.length == 0) {
			toast.error("Password cannot be empty.");
			valid = false;
		}
		if (!info.name || info.name.length == 0) {
			toast.error("Name cannot be empty.");
			valid = false;
		}
		if (!info.mobile || info.mobile.length == 0) {
			toast.error("Mobile cannot be empty.");
			valid = false;
		}
		if (!info.address || info.address.length == 0) {
			toast.error("Address cannot be empty.");
			valid = false;
		}

		if (valid) {
			const message = `Email: ${info.email}\nPasswd: ${info.passwd}\nName: ${info.name}\nMobile: ${info.mobile}\nAddress: ${info.address}`;
			toast.success(message);
			// save user info into local storage
			userSave(info);
			navigate("/login");
		}
	};

	return (
		<div className="col-6 border border-2 shadow p-5 m-3">
			<div className="mb-3 text-center">
				<h2>Registration Form</h2>
			</div>
			<div className="mb-3">
				<label className="form-label">Email:</label>
				<input
					className="form-control"
					name="email"
					type="text"
					onChange={handleEmailChange}
				/>
			</div>
			<div className="mb-3">
				<label className="form-label">Password:</label>
				<input
					className="form-control"
					name="passwd"
					type="password"
					onChange={handlePasswdChange}
				/>
			</div>
			<div className="mb-3">
				<label className="form-label">Name:</label>
				<input
					className="form-control"
					name="name"
					type="text"
					onChange={handleInputFieldChange}
				/>
			</div>
			<div className="mb-3">
				<label className="form-label">Mobile:</label>
				<input
					className="form-control"
					name="mobile"
					type="text"
					onChange={handleInputFieldChange}
				/>
			</div>
			<div className="mb-3">
				<label className="form-label">Address:</label>
				<input
					className="form-control"
					name="address"
					type="text"
					onChange={handleInputFieldChange}
				/>
			</div>
			<div className="row">
				<button
					className="mx-3 col btn btn-primary"
					onClick={handleSignUpClick}
				>
					Sign Up
				</button>
				<Link className="mx-3 col btn btn-secondary" to="/login">
					Sign In
				</Link>
			</div>
		</div>
	);
};

export default RegistrationForm;
