const mongoose = require('mongoose');
const { ObjectId } = mongoose.SchemaTypes;
const TripStatus = require('../type/TripStatus');

const Trip = new mongoose.Schema({
	driver: {
		type: ObjectId,
		ref: 'Driver'
	},
	customer: {
		type: ObjectId,
		ref: 'Customer'
	},
	status: {
		type: Number,
		default: TripStatus.FINDING
	}
});

module.exports = mongoose.model('Trip', Trip);
