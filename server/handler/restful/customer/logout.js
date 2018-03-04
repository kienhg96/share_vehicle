const { NOT_LOGIN } = require('../../../type/ErrorTypes');

function logout(req, res, next) {
	if (!req.customer) {
		return res.error(NOT_LOGIN);
	}
	req.customer.removeToken();
	return res.json({ error: 0 });
}

module.exports = logout;
