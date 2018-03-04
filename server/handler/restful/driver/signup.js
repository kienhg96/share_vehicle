const is = require('../../../util/is');
const {
	INVALID_ARGUMENT,
	EMAIL_EXISTS,
	PHONE_EXISTS
} = require('../../../type/ErrorTypes');
const Driver = require('../../../model/Driver');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const moment = require('moment');

function signup(req, res, next) {
	if (!checkArguments(req, res)) {
		return;
	}
	const { email, phone } = req.body;
	Driver.findByEmail(email, (err, driver) => {
		if (err) { return next(err); }
		if (driver) {
			return res.error(EMAIL_EXISTS);
		}
		Driver.findByPhone(phone, (err, driver) => {
			if (err) { return next(err); }
			if (driver) {
				return res.error(PHONE_EXISTS);
			}
			createAccount(req, res, next);
		});
	});
}

function checkArguments(req, res) {
	const { firstName, lastName, birthday, email, phone, password } = req.body;
	if (!is.string(firstName)) {
		return res.error(INVALID_ARGUMENT, 'firstName');
	}
	if (!is.string(lastName)) {
		return res.error(INVALID_ARGUMENT, 'lastName');
	}
	if (!is.string(birthday)) {
		return res.error(INVALID_ARGUMENT, 'birthday');
	}
	req.body.birthday = moment(birthday);
	if (!req.body.birthday.isValid()) {
		return res.error(INVALID_ARGUMENT, 'birthday');
	}
	if (!is.email(email)) {
		return res.error(INVALID_ARGUMENT, 'email');
	}
	if (!is.phone(phone)) {
		return res.error(INVALID_ARGUMENT, 'phone');
	}
	if (!is.string(password)) {
		return res.error(INVALID_ARGUMENT, 'password');
	}
	return true;
}

function createAccount(req, res, next) {
	const { firstName, lastName, birthday, email, phone, password } = req.body;
	bcrypt.hash(password, 10, (err, hash) => {
		if (err) {
			return next(err);
		}
		const driver = new Driver({
			firstName,
			lastName,
			birthday,
			email,
			phone,
			password: hash
		});
		driver.save();
		return res.json(_.omit(driver, ['password']));
	});
}

module.exports = signup;
