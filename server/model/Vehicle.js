const mongoose = require('mongoose');

const Vehicle = new mongoose.Schema({
	name: String,
	type: Number,
	plate: String
});

module.exports = mongoose.model('Vehicle', Vehicle);
