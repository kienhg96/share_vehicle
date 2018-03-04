const crypto = require('crypto');

module.exports = (size = 16) => new Promise((resolve, reject) => {
	crypto.randomBytes(size, (err, buffer) => {
		if (err) {
			return reject(err);
		}
		return resolve(buffer.toString('hex'));
	});
});
