// google maps on contacts page
function googleMap() {
    const map = {
        center: new google.maps.LatLng(35.838065, -86.48445219999999),
        zoom:10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}