function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(-34.397, 150.644),
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false
  };

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);