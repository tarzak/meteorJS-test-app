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
            , markers = t.markers
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

            clearMarkers(markers);

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

function clearMarkers (markers) {
    if (markers && markers.length) {
        markers.forEach(function(marker) {
            marker.setMap(null);
        });
    }
}