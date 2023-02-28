const createInfoDiv = (user) => {
	const div = document.createElement('div');
	div.innerHTML = `${user.email}, ${user.introduction}, ${user.url}`;

	return div;
};

const createDiv = (user) => {
	const div = document.createElement('div');
	div.innerHTML = `${user.name}`;
	div.classList.add('userinfo');
	div.appendChild(createInfoDiv(user));

	return div;
};

const appendToDOM = (users) => {
	const visitor = document.querySelector('.visitor');
	users.forEach((user) => visitor.appendChild(createDiv(user)));
};

const getData = async () => {
	axios
		.get('http://52.78.238.141/api/users')
		.then((res) => {
			const users = res.data;
			console.log(users);
			appendToDOM(users);
		})
		.catch((error) => console.log(error));
};

getData();
