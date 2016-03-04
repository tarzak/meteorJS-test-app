WebApp = {};

WebApp.clearMarkers = function (markers) {
    if (markers && markers.length) {
        markers.forEach(function(marker) {
            marker.setMap(null);
        });

        Venues.remove({});
    }
};