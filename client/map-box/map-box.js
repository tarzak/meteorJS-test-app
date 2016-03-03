Template.mapBox.onRendered(function() {
    GoogleMaps.load();
});

Template.mapBox.helpers({
    exampleMapOptions: function () {
        if (GoogleMaps.loaded()) {
            return {
                center: new google.maps.LatLng(-37.8136, 144.9631),
                zoom: 8,
                scaleControl: true
            }
        }
    }
});

Template.mapBox.events({
    "keypress .search-input input": function (e, t) {
        var userId = Meteor.userId()
            , queryText = e.target.value
            , map = GoogleMaps.maps.map.instance
            , radius = getRadius(map.zoom)
            ;

        if (e.which === 13) {
            let query = {
                query: queryText, 
                userId: userId,
                lat: map.center.lat(),
                lng: map.center.lng(),
                radius: radius
            },
            params = {
                query: queryText,
                ll: [map.center.lat(), map.center.lng()].toString(),
                radius: radius
            };

            Foursquare.find(params, function(error, result) {
                console.log(params, result, error);
            });
            Meteor.call("insertQuery", query);
        }
    }
});

function getRadius(radius) {
    if (radius <= 10) {
        return 100000;
    }
    else if (10 < radius && radius <= 13) {
        return 20000;
    }
    else if (13 < radius && radius <= 17) {
        return 10000;
    }
    else {
        return 2000
    }
}