const url = require('url');

const handleConnection = (ws, req) => {
	const location = url.parse(req.url, true);
	console.log('New connection', location);
}

module.exports = wss => {
	wss.on('connection', handleConnection);
}
