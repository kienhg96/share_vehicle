const concurrent = require('../util/concurrent');
const Driver = require('../model/Driver');
const Customer = require('../model/Customer');

module.exports = (req, res, next) => {
	concurrent([
		deserializeDriver(req, res),
		deserializeCustomer(req, res)
	])
	.then(next)
	.catch(next);
}

function deserializeDriver(req, res) {
	return new Promise((resolve, reject) => {
		const token = req.get('X-Auth-Driver');
		if (!token) { return resolve(); }
		Driver.findByToken(token, (err, driver) => {
			if (err) { return reject(err); }
			req.driver = driver;
			return resolve();
		})
	});
}

function deserializeCustomer(req, res) {
	return new Promise((resolve, reject) => {
		const token = req.get('X-Auth-Customer');
		if (!token) { return resolve(); }
		Customer.findByToken(token, (err, customer) => {
			if (err) { return reject(err); }
			req.customer = customer;
			return resolve();
		})
	});
}
