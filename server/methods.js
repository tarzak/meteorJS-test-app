Meteor.methods({
    insertQuery: function (object) {
        var date = new Date()
            , userId = this.userId
            , newQuery = {
                userId: userId,
                date: date,
                query: object.query,
                lat: object.lat,
                lng: object.lng, 
                radius: object.radius
            }
            ;
        if (userId) {
            Queries.insert(newQuery);
        }
        console.log(newQuery);
    }
});