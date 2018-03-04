const ErrorTypes = {
	INVALID_ARGUMENT: 1,
	INVALID_USERNAME_OR_PASSWORD: 2,
	EMAIL_EXISTS: 3,
	PHONE_EXISTS: 4,
	NOT_LOGIN: 5
};

const ErrorDescription = {
	1: "Missing or Invalid argument",
	2: "Invalid username or password",
	3: "Email exists",
	4: "Phone number exists",
	5: "Not login"
};

exports = module.exports = ErrorTypes;
exports.ErrorDescription = ErrorDescription;
