module.exports = (req, res, next) => {
	return res.json({
		error: 100,
		description: "Internal Errors"
	});
};
