const is = require('../../../util/is');
const {
	INVALID_ARGUMENT,
	INVALID_USERNAME_OR_PASSWORD
} = require('../../../type/ErrorTypes');
const randToken = require('../../../util/randToken');
const Driver = require('../../../model/Driver');
const bcrypt = require('bcrypt');
const _ = require('lodash');

function login(req, res, next) {
	if (!checkArguments(req, res)) {
		return;
	}
	// Do stub
	const { username, password } = req.body;
	const query = {};
	if (username.indexOf('@') !== -1) {
		query.email = username;
	} else {
		query.phone = username;
	}
	Driver.findOne(query, (err, driver) => {
		if (err) {
			return next(err);
		}
		bcrypt.compare(password, driver.password)
		.then(result => {
			if (!result) {
				return res.error(INVALID_USERNAME_OR_PASSWORD);
			}
			return randToken();
		})
		.then(token => {
			driver.setToken(token, err => {
				if (err) { return next(err); }
				return res.json({
					token,
					driver
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
