/*
 * Serve JSON to our AngularJS client
 */
var nexmo = require('easynexmo');
var constants = require('../config/constants.js');
nexmo.initialize(constants.Nexmo.Key, constants.Nexmo.Secret, "http", false);

exports.name = function (req, res) {
  res.json({
    name: 'Bob'
    
  });
};

exports.list = function (req, res) {
	res.json([
		{
			tel: "+6281321535858", 
			name: "John Doe"
		}, 
		{
			tel: "+85264300268", 
			name: "Jane Roe"
		}
	]);
};

exports.send = function (req, res) {
	var data = req.body;
	var tel = req.body.data[0].tel;
	var msg = req.body.message;
	var callback = function() {
		console.log("SUCCESS ");
	}

	nexmo.sendTextMessage("philip",tel,msg,{},callback);
	
};