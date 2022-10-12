const { getExpectedTwilioSignature } = require('twilio/lib/webhooks/webhooks');

// Retrieve your auth token from the environment instead of hardcoding
const authToken = process.env.TWILIO_AUTH_TOKEN;

// Use the Twilio helper to generate your valid signature!
// The 1st argument is your Twilio auth token.
// The 2nd is the full URL of your Function.
// The 3rd is any form encoded data being sent, which is none!
const xTwilioSignature = getExpectedTwilioSignature(
  '78396d0f26e03ef503a66c053dffd404',
  'https://geekmj-javascript-guides-r75vjjr7jr2jxp-3000.githubpreview.dev/sendSms',
  {} // <- Leave this empty if sending request data via JSON
);

// Print the signature to the console for use with your
// preferred HTTP client
console.log('xTwilioSignature: ', xTwilioSignature);

// For example, output will look like this:
// xTwilioSignature: coGTEaFEMv8ejgNGtgtUsbL8r7c=