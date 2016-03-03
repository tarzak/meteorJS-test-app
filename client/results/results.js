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
    }
});

Template.results.events({
    "click button": function (e, t) {
        console.log(t);
    }
});