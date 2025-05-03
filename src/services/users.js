export function userSave(newUser) {
	const users = JSON.parse(localStorage.getItem("users") || "[]");
	const lastId = users.at(-1)?.id || 0;
	newUser.id = lastId + 1;
	users.push(newUser);
	localStorage.setItem("users", JSON.stringify(users));
	return newUser;
}

export function findUserByEmail(email) {
	let users = JSON.parse(localStorage.getItem("users") || "[]");
	users = users.filter((u) => u.email === email);
	if (users.length > 0) return users[0];
}

export function findUserByCredentials({ email, passwd }) {
	const user = findUserByEmail(email);
	if (user && user.passwd === passwd) return user;
	else throw new Error("Invalid credentials");
}
