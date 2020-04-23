function getUsers(names, users) {
	for(let name of names) {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', `https://api.github.com/users/${name}`);
		xhr.send();
		xhr.onload = () => {
			if (xhr.status == 200) {
				users.push(JSON.parse(xhr.response));
			}
		};
		xhr.onerror = () => {
			//process error
		};
	}
}

function run() {
	const users = [];
	getUsers(['google-research', 'yandex'], users);
	setTimeout(() => console.log('2', users), 1000);
	console.log('1', users);
}

window.onload = run;
