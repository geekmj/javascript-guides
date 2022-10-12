# REST API to send SMS using Twilio function

A getting started sample to start building with Twilio Function. We will build REST API to send SMS using Twilio function.

# Prerequisite
* Install NodeJS v16.x 
* Install [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart) globally
    
    ```sh
    npm install -g twilio-cli
    ```
* [Install serverless plugin](https://www.twilio.com/docs/labs/serverless-toolkit/getting-started)
  
  ```sh
  twilio plugins:install @twilio-labs/plugin-serverless
  ```
* See a list of available serverless commands
  
  ```sh
  twilio serverless
  ```
* Login in Twilio using Workspace SID and Auth Token and a profile will save .twilio-cli/config.json
  
  ```
    twilio login
  ```

* We can create a boilerplate  