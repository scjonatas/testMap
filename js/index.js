$(document).ready(function() {
    
    alert("ae 2");
    
});


alert("ae!");
    
    // In the callback you can use "this" to call a function (e.g. this.get('map') instead of $('#map_canvas').gmap('get', 'map'))
    $('#map_canvas').gmap({
        'callback' : function() {
            var self = this;
            // we can't use "this" inside the click function (that refers to the marker object in this example)
            self.addMarker({
                'position' : '57.7973333,12.0502107',
                'bounds' : true
            }).click(function() {
                self.openInfoWindow({
                    'content' : 'Hello World!'
                }, this);
            });
        }
    });