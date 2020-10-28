   window.onload = function() {
        let startPos;
        let startPosLat;
        let startPosLong;
        let distance;
      
        if (navigator.geolocation) {

          startPosLat = 19.365887999999998;
          startPosLong = -99.2935936;

          $("#startLat").text(startPosLat);
          $("#startLon").text(startPosLong);
      
          navigator.geolocation.watchPosition(function(position) {
            $("#currentLat").text(position.coords.latitude);
            $("#currentLon").text(position.coords.longitude);

            distance = calculateDistance(startPosLat, startPosLong,position.coords.latitude, position.coords.longitude)
            $("#distance").text(distance);

            if(distance < 0.05){
              $("#message").text("Yes, were inside 50 M!!! :) A+")
            }else if(distance > 0.05){
              $("#message").text("No, not inside 50 M :(")
            }
          });
        }
      };
      
      // Reused code - copyright Moveable Type Scripts - retrieved May 4, 2010.
      // http://www.movable-type.co.uk/scripts/latlong.html
      // Under Creative Commons License http://creativecommons.org/licenses/by/3.0/
      function calculateDistance(lat1, lon1, lat2, lon2) {
        let R = 6371; // km
        let dLat = (lat2-lat1).toRad();
        let dLon = (lon2-lon1).toRad();
        let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
                Math.sin(dLon/2) * Math.sin(dLon/2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
      }
      Number.prototype.toRad = function() {
        return this * Math.PI / 180;
      };