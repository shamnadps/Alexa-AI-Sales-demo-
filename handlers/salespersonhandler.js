module.exports = {
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

  }
};
