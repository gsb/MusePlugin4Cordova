// This is installed as a <js-module /> so it doesn't have a cordova.define wrapper

var exec = require('cordova/exec');

var Muse = function() {
	this.serviceName = "Muse";
};

Muse.prototype.init = function(successCallback, failureCallback)
{
	exec(successCallback, failureCallback, this.serviceName, "init", []);
}

Muse.prototype.registerDataListener = function(dataType, successCallback, failureCallback)
{
	exec(successCallback, failureCallback, this.serviceName, "registerDataListener", [dataType]);
}

Muse.prototype.unregisterDataListener = function(dataType, successCallback, failureCallback)
{
	exec(successCallback, failureCallback, this.serviceName, "unregisterDataListener", [dataType]);
}

module.exports = Muse;
