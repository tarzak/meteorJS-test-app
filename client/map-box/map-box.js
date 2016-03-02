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
})