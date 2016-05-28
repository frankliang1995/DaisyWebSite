function init_map(){
    var myOptions = {
        zoom:18,center:new google.maps.LatLng(44.28235741734971,-78.35188169643402),mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
    marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(44.28235741734971,-78.35188169643402)});
    infowindow = new google.maps.InfoWindow({content:'<strong>Daisy Restuarant</strong><br>1200 Lansdowne Street, Peterborough, Ontario, Canada <br>'});
    google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});infowindow.open(map,marker);
}
google.maps.event.addDomListener(window, 'load', init_map);