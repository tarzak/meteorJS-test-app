# MeteorJS test-app.
[demo](http://tarzak.meteor.com)

### Integrated APIs
1. Google authentication.
2. Google maps.
3. Foursquare.

### Run
To run this app, you will need installed [MeteorJS](http://meteor.com) and cloned repo.
Then get your developer API keys for [google](https://console.developers.google.com/home/dashboard) authentication, [Foursquare](https://foursquare.com/developers/apps). Create `json` file and paste your keys into:
```js
{
    "foursquare": {
        "id": "ID_KEY",
        "secret": "SECRET_KEY"
    },
    "googleAuth": {
        "clientId": "CLIENT_ID_KEY",
        "secret": "SECRET_KEY"
    }
}
```
After that, use something like that:
```js
meteor run --settings settings.json
```

### Issues
There is one known issue. Export of cyrilic symbols in CSV-file does not work properly, symbols are unreadable.

### Future features
- Removing user's queries with garbage bucket icon.
