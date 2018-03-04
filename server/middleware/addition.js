const ErrorTypes = require('../type/ErrorTypes');
const { ErrorDescription } = ErrorTypes;

module.exports = (req, res, next) => {
	// Always returns false
	res.error = (type, addition) => {
		res.json({
			error: type,
			description: ErrorDescription[type],
			addition
		});
		return false;
	}
	next();
};
