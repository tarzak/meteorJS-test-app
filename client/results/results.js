Template.results.helpers({
    results: function () {
        return Venues.find();
    },
    numberOfVenues: function () {
        return Venues.find().count();
    },
    plurality: function () {
        var venuesCount = Venues.find().count()
            ;

        if (venuesCount === 1) {
            return '';
        }

        return 's';
    },
    isDisabled: function () {
        var venuesCount = Venues.find().count()
            ;

        if (venuesCount > 0) {
            return '';
        }

        return 'disabled';
    }
});

Template.results.events({
    "click button.results": function (e, t) {
        var nameFile = 'venues.csv'
            , venues = Venues.find({},{fields:{_id:0}}).fetch()
            ;
        Meteor.call('exportCSV', venues, function(err, fileContent) {
            if (fileContent) {
                var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
                saveAs(blob, nameFile);
            }
        });
    }
});