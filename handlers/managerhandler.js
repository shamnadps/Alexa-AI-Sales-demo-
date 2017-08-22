module.exports = {
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
