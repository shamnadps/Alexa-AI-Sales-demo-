var Alexa = require('alexa-sdk');
var http = require('http')
var twilio = require('twilio')
var accountSid = "ACff972b9c89b68148bd67a25130f17754"; // Your Account SID from www.twilio.com/console
var authToken = "13ad675cc59842cfc0a8c5c09502020b"; // Your Auth Token from www.twilio.com/console
var fromNumber = "+15625261148";
var appId = "amzn1.ask.skill.40f5a1ea-d72e-48e5-8df0-1f26e7e6d992";
var client = require('twilio')(accountSid, authToken);


exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context, callback);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {
  'LaunchRequest': function() {
    this.emit('WelcomeIntent');
  },

  'WelcomeIntent': function() {
    this.emit(':tell', 'Welcome to Alexa Tagrail demo!');
  },

  'AMAZON.HelpIntent': function() {
    var message = 'Try with Alexa, ask Mithra commands.';
    this.emit(':tell', message);
  },

  'Unhandled': function() {
    var message = 'This request is not handled by Alexa Tagrail demo now!';
    this.emit(':tell', message);
  },

  'showmetheleads': function() {
    if (this.event.request.dialogState === 'STARTED') {
      console.log('showmetheleads request in started');
      var updatedIntent = this.event.request.intent;
      this.emit(':delegate', updatedIntent);
    } else if (this.event.request.dialogState !== 'COMPLETED') {
      console.log('showmetheleads request in not completed');
      this.emit(':delegate');
    } else {
      var message = 'Here are the list of your leads for today. Mark Minton, Barb Peterson and Susan Hughes';
      this.emit(':tell', message);
    }
  },

  'listofmycustomers': function() {
    if (this.event.request.dialogState === 'STARTED') {
      console.log('listofmycustomers request in started');
      var updatedIntent = this.event.request.intent;
      this.emit(':delegate', updatedIntent);
    } else if (this.event.request.dialogState !== 'COMPLETED') {
      console.log('listofmycustomers request in not completed');
      this.emit(':delegate');
    } else {
      var message = 'Here is the list of your customers with Birthday today, Clara Thompson, Ana Borges and Lina Korpivaara';
      this.emit(':tell', message);
    }
  },

  'newleadsinmycrm': function() {
    if (this.event.request.dialogState === 'STARTED') {
      console.log('newleadsinmycrm request in started');
      var updatedIntent = this.event.request.intent;
      this.emit(':delegate', updatedIntent);
    } else if (this.event.request.dialogState !== 'COMPLETED') {
      console.log('newleadsinmycrm request in not completed');
      this.emit(':delegate');
    } else {
      var message = 'Here is the list of new leads in your CRM, Fabiano Parvi, Gonzalo Borobio and Ville Thompson';
      this.emit(':tell', message);
    }
  },

  'connectwithcustomer': function() {
    var toNumber = "+1 4083732554"
    var thisObj = this;
    if (this.event.request.dialogState === 'STARTED') {
      console.log('calling request in started');
      var updatedIntent = this.event.request.intent;
      this.emit(':delegate', updatedIntent);
    } else if (this.event.request.dialogState !== 'COMPLETED') {
      console.log('calling request in not completed');
      this.emit(':delegate');
    } else {
      console.log('calling customer slots filled: ' + JSON.stringify(this.event.request.intent));
      var customerName = this.event.request.intent.slots.customerName.value;
      client.calls.create({
        to: toNumber, // Any number Twilio can call
        from: fromNumber, // A number you bought from Twilio and can use for outbound communication
        url: "https://handler.twilio.com/twiml/EHd23a0ac3a643326d39ff1a10666dae0d" // A URL that produces an XML document (TwiML) which contains instructions for the call

      }, function(err, call) {
        if (err) {
          thisObj.emit(':tell', 'Calling ' + customerName + ' on his mobile Failed');
        }
        if (call) {
          thisObj.emit(':tell', 'Calling ' + customerName + ' on his mobile');
        }
      });
    }

  },

  'closingratio': function() {
    if (this.event.request.dialogState === 'STARTED') {
      console.log('closingratio request in started');
      var updatedIntent = this.event.request.intent;
      this.emit(':delegate', updatedIntent);
    } else if (this.event.request.dialogState !== 'COMPLETED') {
      console.log('closingratio request in not completed');
      this.emit(':delegate');
    } else {
      var message = 'Your closing ratio for today will be provide after implementation. Probably by next week';
      this.emit(':tell', message);
    }
  },

  'potentialsales': function() {
    if (this.event.request.dialogState === 'STARTED') {
      console.log('potentialsales request in started');
      var updatedIntent = this.event.request.intent;
      this.emit(':delegate', updatedIntent);
    } else if (this.event.request.dialogState !== 'COMPLETED') {
      console.log('potentialsales request in not completed');
      this.emit(':delegate');
    } else {
      var intentName = this.event.request.intent.name;
      var message = 'Your potential sales for the month will be provided after the implementation. Probably by next week.';
      this.emit(':tell', message);
    }
  },

  'untouchedleads': function() {
    if (this.event.request.dialogState === 'STARTED') {
      console.log('untouchedleads request in started');
      var updatedIntent = this.event.request.intent;
      this.emit(':delegate', updatedIntent);
    } else if (this.event.request.dialogState !== 'COMPLETED') {
      console.log('untouchedleads request in not completed');
      this.emit(':delegate');
    } else {
      var message = 'Here are the list of untouched leads in your system, George , Art Vandalay and Jerry Seinfeld';
      this.emit(':tell', message);
    }
  },

  'salespersondata': function() {
    if (this.event.request.dialogState === 'STARTED') {
      console.log('salespersondata request in started');
      var updatedIntent = this.event.request.intent;
      this.emit(':delegate', updatedIntent);
    } else if (this.event.request.dialogState !== 'COMPLETED') {
      console.log('salespersondata request in not completed');
      this.emit(':delegate');
    } else {
      var salesPerson = this.event.request.intent.slots.salesPerson.value;
      var message = salesPerson + ' did the coding for alexa demo yesterday';
      this.emit(':tell', message);
    }
  },

  'addnewleadtocrm': function() {
    console.log('addnewleadtocrm Started');
    if (this.event.request.dialogState === 'STARTED') {
      console.log('addnewleadtocrm in started');
      var updatedIntent = this.event.request.intent;
      this.emit(':delegate', updatedIntent);
    } else if (this.event.request.dialogState !== 'COMPLETED') {
      console.log('addnewleadtocrm in not completed');
      this.emit(':delegate');
    } else {
      console.log('addnewleadtocrm slots filled: ' + JSON.stringify(this.event.request.intent));
      var intentObj = this.event.request.intent;
      var name = intentObj.slots.Name.value;
      var phone = intentObj.slots.Phone.value;
      var email = intentObj.slots.Email.value;
      console.log('addnewleadtocrm: values: name' + name + ', email ' + email + 'and phone' + phone);
      var message = 'Adding new lead with name' + name + ', email ' + email + 'and phone' + phone;
      this.emit(':tell', message);
    }
    console.log("addnewleadtocrm Completed");
  }
};
