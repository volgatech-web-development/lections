const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (Math.random() > 0.5) {
			resolve('result');
		} else {
			reject('o_O');
		}
	}, 1000)
})

promise
	.then(
		value => console.log('Fulfilled: ', value),
		error => console.log('Rejected: ', error)
	)

promise
	.catch(error => console.log('Rejected: ', error))