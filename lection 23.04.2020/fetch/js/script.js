function getUsers(names) {
	const infos = [];
	for(const name of names) {
		const info = fetch(`https://api.github.com/users/${name}`)
			.then(successResponse => successResponse.status == 200
				? successResponse.json()
				: null
			);
		infos.push(info);
	}

	return Promise.all(infos);
}

async function run() {
	const users = await getUsers(['google-research', 'yandex']);
	console.log(users);
}

window.onload = run;
