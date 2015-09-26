var noble = require('noble');
console.log('started scanning');

noble.on('scanStart', function() {
	console.log(arguments);
});


noble.on('servicesDiscover', function() {
	console.log('sd', arguments);
});


noble.on('discover', function() {
	console.log('d', arguments);
});
