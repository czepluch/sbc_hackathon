
var bluetooth = new (require('bluetooth-serial-port')).BluetoothSerialPort();

console.log('started bt child');

bluetooth.on('found', function(address, name) {

	console.log('fine');
	console.log(arguments);

	process.send({address: address, name: name});

});

bluetooth.inquire();
