Template.mapBox.onRendered(function() {
    GoogleMaps.load();
});

Template.mapBox.helpers({
    exampleMapOptions: function () {
        if (GoogleMaps.loaded()) {
            return {
                center: new google.maps.LatLng(-37.8136, 144.9631),
                zoom: 8
            }
        }
    }
});

Template.mapBox.events({
    "keypress .search-input input": function (e, t) {
        var userId = Meteor.userId()
            , queryText = e.target.value
            ;

        if (e.which === 13) {
            Meteor.call("insertQuery", {test:'test', query: queryText});
        }
    }
})