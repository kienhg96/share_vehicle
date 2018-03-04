const mongoose = require('mongoose');
const { redis_prefix } = require('../config/constants');
const redis = require('../config/redis');

const Driver = new mongoose.Schema({
	firstName: String,
	lastName: String,
	birthday: Date,
	email: String,
	phone: String,
	password: String
});

Driver.methods.setLocation = function(location, cb) {
	const key = `${redis_prefix}:driver:location:${this._id.toString()}`;
	redis.hmset(key, 'lat', location.lat, 'lng', location.lng, cb);
}

Driver.methods.getLocation = function(cb) {
	const key = `${redis_prefix}:driver:location:${this._id.toString()}`;
	redis.hmget(key, 'lat', 'lng', (err, result) => {
		if (err) { return cb(err); }
		return cb(null, { lat: result[0], lng: result[1] });
	});
}

Driver.methods.setToken = function(token, cb) {
	const id = this._id.toString();
	let key = `${redis_prefix}:driver:id:${id}`;
	redis.get(key, (err, result) => {
		if (err) { return cb(err); }
		if (result) {
			redis.del(`${redis_prefix}:driver:token:${result}`, err => {
				if (err) { return cb(err); }
			});
		}
		redis.set(key, token, err => {
			if (err) { return cb(err); }
			key = `${redis_prefix}:driver:token:${token}`;
			redis.set(key, id, cb);
		});
	});
}

Driver.methods.removeToken = function(cb) {
	const id = this._id.toString();
	let key = `${redis_prefix}:driver:id:${id}`;
	redis.get(key, (err, result) => {
		if (err) { return cb(err); }
		let key2 = `${redis_prefix}:driver:token:${result}`;
		redis.del(key, key2, cb);
	});
}

Driver.statics.findByToken = function(token, cb) {
	const key = `${redis_prefix}:driver:token:${token}`;
	redis.get(key, (err, result) => {
		if (err) { return cb(err); }
		if (!result) { return cb(null, null); }
		this.findById(result, cb);
	});
}

Driver.statics.findByEmail = function(email, cb) {
	this.findOne({ email }, cb);
}

Driver.statics.findByPhone = function(phone, cb) {
	this.findOne({ phone }, cb);
}

module.exports = mongoose.model('Driver', Driver);
