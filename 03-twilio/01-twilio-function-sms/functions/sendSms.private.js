exports.handler = function (context, event, callback) {
    // The pre-initialized Twilio Client is available from the `context` object
    console.log('Account Sid: ', context.SERVICE_SID);
    
    const twilioClient = context.getTwilioClient();
    
  
    // Query parameters or values sent in a POST body can be accessed from `event`
    const from = event.From || '+12517580188';
    const to = event.To || '+31638970747';
    const body = event.Body || 'Ahoy, World!';
  
    // Use `messages.create` to generate a message. Be sure to chain with `then`
    // and `catch` to properly handle the promise and call `callback` _after_ the
    // message is sent successfully!
    twilioClient.messages
      .create({ body, to, from })
      .then((message) => {
        console.log('SMS successfully sent');
        console.log(message.sid);
        // Make sure to only call `callback` once everything is finished, and to pass
        // null as the first parameter to signal successful execution.
        return callback(null, `Success! Message SID: ${message.sid}`);
      })
      .catch((error) => {
        console.error(error);
        return callback(error);
      });
  };
  