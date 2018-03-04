module.exports = (err, req, res, next) => {
	console.error(err);
	return res.json({
		error: 100,
		description: "Internal Errors"
	});
};
