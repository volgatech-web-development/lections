function randomInteger(min, max) {
	// случайное число от min до (max+1)
	const rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

function randomColor() {
	return Math.floor(Math.random()*16777215).toString(16);
}