async function doFecth() {
	const response = await fetch(url);
	if (response.ok) {
		const json = await response.json();
		console.log(json)
	}
}

const responsePromise = fetch(url);
responsePromise.then(response => {
	if (response.ok) {
		const jsonPromise = response.json();
		jsonPromise.then(json => console.log(json))
	}
})