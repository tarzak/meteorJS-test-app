Template.mapBlock.onRendered(function() {
    GoogleMaps.load();
});

Template.mapBlock.helpers({
    exampleMapOptions: function () {
        if (GoogleMaps.loaded()) {
            return {
                center: new google.maps.LatLng(0.0, 0.0),
                zoom: 1,
                scaleControl: true
            }
        }
    }
});

Template.mapBlock.events({
    "keypress .search-input input": function (e, t) {
        var userId = Meteor.userId()
            , queryText = e.target.value
            , map = GoogleMaps.maps.map.instance
            , radius = getRadius(map.zoom)
            , markers = t.markers
            ;

        if (e.which === 13) {
            let query = {
                query: queryText, 
                userId: userId,
                lat: map.center.lat(),
                lng: map.center.lng(),
                radius: radius/1000
            },
            params = {
                query: queryText,
                ll: [map.center.lat(), map.center.lng()].toString(),
                radius: radius
            };

            WebApp.clearMarkers(markers);

            Foursquare.find(params, function(error, result) {
                var venues = result.response.venues
                    ;

                if (venues && venues.length) {
                    t.markers = venues.map(function(venue) {
                        var markerLocation = venue.location
                            , marker = new google.maps.Marker({
                                position: {lat: markerLocation.lat, lng: markerLocation.lng},
                                title: venue.name
                            });

                        Venues.insert(formatVenue(venue));
                        marker.setMap(map);

                        return marker;
                    });
                }
            });
            
            Meteor.call("insertQuery", query);
        }
    }
});

function getRadius (radius) {
    if (radius <= 10) {
        return 20000;
    }
    else if (10 < radius && radius <= 13) {
        return 4000;
    }
    else if (13 < radius && radius <= 17) {
        return 2000;
    }
    else {
        return 400
    }
}

function formatVenue (venue) {
    var obj = {
        name: venue.name,
        city: venue.location.city || '-',
        address: venue.location.address || '-',
        lat: venue.location.lat,
        lng: venue.location.lng
    };
    
    return obj;
}