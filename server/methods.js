Meteor.methods({
    insertQuery: function (object) {
        var date = new Date()
            , userId = this.userId
            , newQuery = {
                userId: userId,
                date: date,
                query: object.query,
                latitude: object.latitude,
                longitude: object.longitude, 
                radius: object.radius
            }
            ;
        if (userId) {
            Queries.insert(newQuery);
        }
        console.log(newQuery);
    }
});