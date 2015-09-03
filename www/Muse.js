// This is installed as a <js-module /> so it doesn't have a cordova.define wrapper

var argscheck = require('cordova/argscheck'),
    channel = require('cordova/channel'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec'),
    cordova = require('cordova');

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

Muse.prototype.getMuseList = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "getMuseList", []);
}

Muse.prototype.connectToMuse = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "connectToMuse", []);
}

Muse.prototype.disconnectMuse = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "disconnectMuse", []);
}

Muse.prototype.startRecording = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "startRecording", []);
}

Muse.prototype.stopRecording = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "stopRecording", []);
}

Muse.prototype.getAccLeftRight = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "getAccLeftRight", []);
}

Muse.prototype.getAccForwardBackward = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "getAccForwardBackward", []);
}

Muse.prototype.getAccUpDown = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "getAccUpDown", []);
}

Muse.prototype.getEegLeftEar = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "getEegLeftEar", []);
}

Muse.prototype.getEegRightEar = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "getEegRightEar", []);
}

Muse.prototype.getEegLeftForehead = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "getEegLeftForehead", []);
}

Muse.prototype.getEegRightForehead = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "getEegRightForehead", []);
}

Muse.prototype.getAlphaRelativeChannel1 = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "getAlphaRelativeChannel1", []);
}

Muse.prototype.getAlphaRelativeChannel2 = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "getAlphaRelativeChannel2", []);
}

Muse.prototype.getAlphaRelativeChannel3 = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "getAlphaRelativeChannel3", []);
}

Muse.prototype.getAlphaRelativeChannel4 = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "getAlphaRelativeChannel4", []);
}

Muse.prototype.getBetaRelativeChannel1 = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "getBetaRelativeChannel1", []);
}

Muse.prototype.getBetaRelativeChannel2 = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "getBetaRelativeChannel2", []);
}

Muse.prototype.getBetaRelativeChannel3 = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "getBetaRelativeChannel3", []);
}

Muse.prototype.getBetaRelativeChannel4 = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "getBetaRelativeChannel4", []);
}

Muse.prototype.getThetaRelativeChannel1 = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "getThetaRelativeChannel1", []);
}

Muse.prototype.getThetaRelativeChannel2 = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "getThetaRelativeChannel2", []);
}

Muse.prototype.getThetaRelativeChannel3 = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "getThetaRelativeChannel3", []);
}

Muse.prototype.getThetaRelativeChannel4 = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "getThetaRelativeChannel4", []);
}

Muse.prototype.getGammaRelativeChannel1 = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "getGammaRelativeChannel1", []);
}

Muse.prototype.getGammaRelativeChannel2 = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "getGammaRelativeChannel2", []);
}

Muse.prototype.getGammaRelativeChannel3 = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "getGammaRelativeChannel3", []);
}

Muse.prototype.getGammaRelativeChannel4 = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "getGammaRelativeChannel4", []);
}

Muse.prototype.getBlink = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "getBlink", []);
}

Muse.prototype.testConnection = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "testConnection", []);
}

Muse.prototype.getRecordingData = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, this.serviceName, "getRecordingData", []);
}

module.exports = new Muse();

