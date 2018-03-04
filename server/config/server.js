const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const bodyParser = require('body-parser');
const restful = require('../handler/restful');
const wsHandler = require('../handler/ws');
const errorHandler = require('../middleware/errorHandler');
const addition = require('../middleware/addition');
const unhandled = require('../middleware/unhandled');
const deserialize = require('../middleware/deserialize');
require('./mongoose');
require('./redis');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const port = process.env.PORT || 8080;
server.listen(port, () => {
	console.log("[i] Server is listening on port " + server.address().port);
});

// Configure express app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(addition);
app.use(deserialize);
app.use(restful);
app.use(unhandled);
app.use(errorHandler);

// Configure websocket server
wsHandler(wss);

exports = module.exports = server;
exports.app = app;
exports.wss = wss;
