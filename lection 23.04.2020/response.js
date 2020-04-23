const response = await fetch(url);
if (response.ok) { // если HTTP-статус в диапазоне 200-299
	const json = await response.json();
} else {
	alert("Ошибка HTTP: " + response.status);
}