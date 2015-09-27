var Server = require('socket.io');
var cp = require('child_process');
// Ethereum import
var web3 = require('web3');
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8101'));

var io = new Server();

var _sockets = {};

var _DEVICES = {
	"00-ee-bd-53-7c-49": {
		name: "Jacob"
	},
	"bc-f5-ac-55-59-c2": {
		name: "Tim"
	},
	"28-e3-1f-60-5e-22": {
		name: "Kati"
	},
	"c0-ee-fb-26-cd-3e": {
		name: "Daniel"
	}
};

var _CONNECTED = [];
var TIMEOUT = 5000;

io.on('connection', function(socket) {
	console.log('got a connection');
	if (!_sockets[socket.id]) {
		_sockets[socket.id] = socket;
	}



	socket.on('transaction', function() {
	

		// Ethereum specific stuff
		var userAccount = web3.eth.accounts[1];
		var wayPayAccount = web3.eth.accounts[2];
		var wayPayBalance = web3.eth.getBalance(wayPayAccount);
		var journeyPrice = 100;
		console.log(web3.fromWei(userBalance, 'ether').toNumber());
		console.log(web3.fromWei(wayPayBalance, 'ether').toNumber());

		eth.sendTransaction({from: userAccount, to: wayPayAccount, value: journeyPrice})

		var userBalance = web3.eth.getBalance(userAccount);
		socket.emit('balance', userBalance);
	});

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
		
		if (foundDevices.length === 0) {
			return;
		}


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
