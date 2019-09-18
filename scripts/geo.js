function showlocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}
function showPosition(position) {

    var tmpLat = position.coords.latitude;
    var tmpLon = position.coords.longitude;

    $.getJSON('http://nominatim.openstreetmap.org/reverse', {
        lat: tmpLat,
        lon: tmpLon,
        addressdetails: 1,
        format: 'json'
    }, function (result) {

        var tmpLoc = result['display_name'];

        $("#co-my-mind").append('I am at: ' + tmpLoc);
        $("#loc").val(tmpLoc);
        $("#co-lat").val(tmpLat);
        $("#co-lon").val(tmpLon);

    });

}
