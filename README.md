# slack-easy-notifier
Easiest way to send messages to slack

## How to use

1. Only set your webhook url that you can find on Slack's incomming webhook integration and set your username.
2. Enjoy!

```javascript
//import the module to your project
var slack = require('slack-easy-notifier');
//set your webhook and username which will be displayed on the messages.
slack('https://hooks.slack.com/services/D04EXVCHY/B0AUPG81L/zF58Ido49bneWZJxmfKItRF2', 'Sebas-bot'); 
//post a message to slack
//slack('Message to post', '#slack-channel', ':icon:');
slack('Server has started', '#backend', ':bangbang:');
```

You'll see a message similar to this one.

![alt text](http://s16.postimg.org/lx090bukl/Screen_Shot_2016_03_21_at_7_05_49_PM.png "Logo Title Text 1")


You only need to set webhook and username variables once. After that, you can import the module anywhere into your app to post messages.

