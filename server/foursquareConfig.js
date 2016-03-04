Foursquare.init({
    id: Meteor.settings.foursquare.id,
    secret: Meteor.settings.foursquare.secret,
    authOnly: false // need auth for using or no?
});