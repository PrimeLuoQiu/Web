//下述方法返回设备的当前位置，浏览器的Geolocation对象通过调用 Navigator.geolocation来访问
navigator.geolocation.getCurrentPosition(function (position) {
    var latlng = new google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude,
    );
    //该方法只有一个必须的参数，是一个匿名函数，这个函数包含一个表示当前位置数据的position对象。
    var myOptions = {
        zoom: 8,
        center: latlng,
        mapTypeID: google.maps.MapTypeId.TERRAIN,
        disableDefaultUI: true,
    };
    var map = new google.maps.Map(
        document.querySelector('#map_canvas'),
        myOptions,
    );
});