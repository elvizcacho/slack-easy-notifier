var request = require('request');

var webhook_url;
var username;

var sendRequest = function(webhook_url, username, text, channel, icon, cb) {
	request({
		url: webhook_url,
		method: 'POST',
		body: JSON.stringify({
			username: username,
			text: text,
			icon_emoji: icon,
			channel: channel
		})
	}, function(err, res, body) {
		if (cb) cb(err);
	});
}

module.exports = function() {
	var isThereCallback = typeof arguments[arguments.length - 1] === 'function';
	if (isThereCallback) {
		if (arguments.length > 3) {
			if (arguments.length === 4) { //text, channel, icon, cb
				sendRequest(webhook_url, username, arguments[0], arguments[1], arguments[2], arguments[3]);
			} else if (arguments.length === 5) { //username, text, channel, icon, cb
				username = arguments[0];
				sendRequest(webhook_url, username, arguments[1], arguments[2], arguments[3], arguments[4]);
			} else if (arguments.length === 6) { //webhook_url, username, text, channel, icon, cb
				webhook_url = arguments[0];
				username = arguments[1];
				sendRequest(webhook_url, username, arguments[2], arguments[3], arguments[4], arguments[5]);
			} else {
				throw new Error('Wrong number of arguments');
			}
		} else {
			throw new Error('Wrong number of arguments');
		}
	} else {
		if (arguments.length > 1) {
			if (arguments.length === 2) { //webhook_url, username 
				webhook_url = arguments[0];
				username = arguments[1];
			} else if (arguments.length === 3) { //text, channel, icon
				sendRequest(webhook_url, username, arguments[0], arguments[1], arguments[2]);
			} else if (arguments.length === 4) { //username, text, channel, icon
				username = arguments[0];
				sendRequest(webhook_url, arguments[0], arguments[1], arguments[2], arguments[3]);
			} else if (arguments.length === 5) { //webhook_url, username, text, channel, icon
				webhook_url = arguments[0];
				username = arguments[1];
				sendRequest(webhook_url[0], arguments[1], arguments[2], arguments[3], arguments[4]);
			} else {
				throw new Error('Wrong number of arguments');
			}
		} else {
			throw new Error('Wrong number of arguments');
		}
	}
};
