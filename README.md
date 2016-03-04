# MeteorJS test-app.

### Integrated APIs
1. Google authentication.
2. Google maps.
3. Foursquare.

### Run
To run this app, you will need installed [MeteorJS](http://meteor.com) and cloned repo.
Then get your developer API keys for [google](https://console.developers.google.com/home/dashboard) authentication, [Foursquare](https://foursquare.com/developers/apps). Insert them in `server/googleAuthConfig.js` and `server/foursquareConfig.js`.

### Issues
There is one known issue. Export of cyrilic symbols in CSV-file does not work properly, symbols are unreadable.
