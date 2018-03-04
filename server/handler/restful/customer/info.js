const _ = require('lodash');
const { NOT_LOGIN } = require('../../../type/ErrorTypes');

function info(req, res, next) {
	if (!req.customer) {
		return res.error(NOT_LOGIN);
	}
	return res.json(_.omit(req.customer, ['password']));
}

module.exports = info;
