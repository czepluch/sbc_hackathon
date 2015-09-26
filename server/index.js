var Server = require('socket.io');
var cp = require('child_process');

var io = new Server();

var _sockets = {};

var _DEVICES = {
	"00-ee-bd-53-7c-49": {
		name: "Jacob"
	},
	"bc-f5-ac-55-59-c2": {
		name: "Tim"
	}
};

var _CONNECTED = [];
var TIMEOUT = 5000;

io.on('connection', function(socket) {
	console.log('got a connection');
	if (!_sockets[socket.id]) {
		_sockets[socket.id] = socket;
	}

	socket.emit('found', _CONNECTED);

});

function spawn() {

	console.log('respawning');
	var n = cp.fork(__dirname + '/bluechild.js');
	n.on('message', function(msg) {
		console.log('OMG', msg)
		//lookup
		var address = msg.address;
		var name = msg.name;
		var foundDevices = Object.keys(_DEVICES).filter(function(device) {
			return address == device;
		})
		.map(function(key) {
			return _DEVICES[key].name;
		});


		if (_CONNECTED.indexOf(address) === -1) {
			_CONNECTED.push(address);
		}

		console.log('found', address, name);
		io.sockets.emit('found', _CONNECTED);

	});


	setTimeout(function() {
		n.kill();
		io.sockets.emit('found', _CONNECTED);
		_CONNECTED = [];
	}, TIMEOUT);
}

setInterval(spawn, TIMEOUT);
spawn();



io.listen(3001);

	console.log('Bluetooth Server running');
