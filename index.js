var Alexa = require('alexa-sdk');
var http = require('http')
var twilio = require('twilio')
var accountSid = "ACff972b9c89b68148bd67a25130f17754"; // Your Account SID from www.twilio.com/console
var authToken = "13ad675cc59842cfc0a8c5c09502020b"; // Your Auth Token from www.twilio.com/console
var fromNumber = "+15625261148";
var appId = "amzn1.ask.skill.40f5a1ea-d72e-48e5-8df0-1f26e7e6d992";
var client = require('twilio')(accountSid, authToken);
var introhandler = require('./handlers/introhandler');
var salespersonhandler = require('./handlers/salespersonhandler');
var managerhandler = require('./handlers/managerhandler');

exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context, callback);
  alexa.registerHandlers(introhandler);
  alexa.registerHandlers(salespersonhandler);
  alexa.registerHandlers(managerhandler);
  alexa.execute();
};
