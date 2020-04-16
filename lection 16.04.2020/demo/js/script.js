const rectsArr = [];

function createRect() {
	const rect = document.createElement('div');
	rect.classList.add('figure');
	rect.style.top = `${randomInteger(0, 400)}px`;
	rect.style.left = `${randomInteger(0, 400)}px`;

	const colorCheckbox = document.getElementById('color');
	if (colorCheckbox.checked)
	{
		rect.addEventListener('click', onRectClick);
	}

	return rect;
}

function onAddRect() {
	const newRect = createRect();
	document.getElementById('container').appendChild(newRect);
	rectsArr.push(newRect);
}

function onRectClick(event) {
	event.target.style.backgroundColor = `#${randomColor()}`;
}

function onChange(event) {
	const checkbox = event.target;
	for (const rect of rectsArr) {
		if (checkbox.checked) {
			rect.addEventListener('click', onRectClick);
		} else {
			rect.removeEventListener('click', onRectClick);
		}
	}
}

function run() {
	const addRectBtn = document.getElementById('rect');
	addRectBtn.addEventListener('click', onAddRect);

	const colorCheckbox = document.getElementById('color');
	colorCheckbox.addEventListener('change', onChange);
}

window.onload = run;
