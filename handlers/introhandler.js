module.exports = {
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
  }
};
