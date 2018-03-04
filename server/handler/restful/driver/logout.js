const { NOT_LOGIN } = require('../../../type/ErrorTypes');

function logout(req, res, next) {
	if (!req.driver) {
		return res.error(NOT_LOGIN);
	}
	req.driver.removeToken();
	return res.json({ error: 0 });
}

module.exports = logout;
