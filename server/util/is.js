const mongoose = require('mongoose');

const emailRe = /^.+@.+$/;
const phoneRe = /^\d{8,16}$/;

exports.number = value => !isNaN(number);
exports.string = value => typeof value === 'string' && value.length > 0;
exports.object = value => typeof value === 'object';
exports.objectId = value => mongoose.Types.ObjectId.isValid(value);
exports.email = value => emailRe.test(value);
exports.phone = value => phoneRe.test(value);
