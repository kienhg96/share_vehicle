module.exports = promises => new Promise((resolve, reject) => {
	let count = 0;
	promises.forEach(promise => {
		promise
		.then(() => {
			count++;
			if (count === promises.length) {
				resolve();
			}
		})
		.catch(reject);
	});
});
