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
    },
    exportCSV: function (array) {
        var collection = array;
        var heading = true; // Optional, defaults to true
        var delimiter = ";" // Optional, defaults to ",";
        return exportcsv.exportToCSV(collection, heading, delimiter);
    }
});