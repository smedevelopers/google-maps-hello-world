define(
	[ "async!http://maps.google.com/maps/api/js?key=AIzaSyCC3WRR4DiZgkibm6tQt7hIeUjg4sTIGSU&sensor=true!callback" ],
	function() {
		return {
			addMapToCanvas: function( mapCanvas ) {
				var myOptions = {
					center: new google.maps.LatLng( -34.397, 150.644 ),
					zoom: 8,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};

				var map = new google.maps.Map( mapCanvas, myOptions );			
			}		
		}
	}
);