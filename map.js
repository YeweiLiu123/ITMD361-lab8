function initMap() {
  var chicagoLocation = { lat: 41.8781, lng: -87.6298 };
  var mapOptions = {
    center: chicagoLocation,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };

  var chicagoMap = new google.maps.Map(document.getElementById('map-container'), mapOptions);

  var marker = new google.maps.Marker({
    position: chicagoLocation,
    map: chicagoMap,
    animation: google.maps.Animation.BOUNCE,
  });

  var contentString = '<h1>Chicago</h1><p>Chicago information.</p>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  google.maps.event.addListener(marker, 'mouseover', function () {
    infowindow.open(chicagoMap, marker);
  });
}

google.maps.event.addDomListener(window, 'load', initMap);