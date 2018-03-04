const is = require('../../../util/is');
const {
	INVALID_ARGUMENT,
	INVALID_USERNAME_OR_PASSWORD
} = require('../../../type/ErrorTypes');
const randToken = require('../../../util/randToken');
const Customer = require('../../../model/Customer');
const bcrypt = require('bcrypt');
const _ = require('lodash');

function login(req, res, next) {
	if (!checkArguments(req, res)) {
		return;
	}
	const { username, password } = req.body;
	const query = {};
	if (username.indexOf('@') !== -1) {
		query.email = username;
	} else {
		query.phone = username;
	}
	Customer.findOne(query, (err, customer) => {
		if (err) {
			return next(err);
		}
		bcrypt.compare(password, customer.password)
		.then(result => {
			if (!result) {
				return res.error(INVALID_USERNAME_OR_PASSWORD);
			}
			return randToken();
		})
		.then(token => {
			customer.setToken(token, err => {
				if (err) { return next(err); }
				return res.json({
					token,
					customer
				});
			});
		})
		.catch(next);
	});
}

function checkArguments(req, res) {
	const { username, password } = req.body;
	if (!is.string(username)) { 
		return res.error(INVALID_ARGUMENT, 'username');
	}
	if (!is.string(password)) {
		return res.error(INVALID_ARGUMENT, 'password');
	}
	return true;
};

module.exports = login;
