const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/share_vehicle')
.then(() => {
	console.log("[M] Connected to mongodb");
})
.catch(err => {
	console.error(err);
})

mongoose.connection.on('error', err => {
	console.error(err);
});
