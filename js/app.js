/**
 * Application main file.
 * Place to setup and run the application.
 *
 * @author  Jose Macchi <jemacchi@yahoo.com.ar>
 */
define([
	'helpers/facilitator',
   '../lib/responsivevoice',
   '../lib/zoom'
  ],
  function(Facilitator, ResponsiveVoice, Zoom, Overlay) {
	
	facilitator = new Facilitator();
	
    var init = function() {
       facilitator.init();
      
        $(function() {
            var _timeout,
                _wait = 1000; // 2 seconds

            $(document).mousemove(function() {
                clearTimeout(_timeout);
                _timeout = setTimeout(function() {
                    //alert(facilitator.getTextualPosition());
                    //Buscar el elemento en tal posicion
                    //responsiveVoice.speak(facilitator.getText());

    var element = $(':hover');
    if(element.length)
    {
        var domElement = element[element.length - 1];
        var tagName = domElement.tagName;
        var id = domElement.id ? ' id="' + domElement.id + '"' : "";
        responsiveVoice.speak(facilitator.getText(domElement));
        //document.getElementById('test').innerHTML =
        //"hover: &lt;" + tagName.toLowerCase() + id + "&gt;";
    }

                    //var posText = facilitator.getTextualPosition();
                    //responsiveVoice.speak(posText);
                }, _wait);
            });
        });

       document.querySelector( 'body' ).addEventListener( 'click', function( event ) {
          event.preventDefault();
          zoom.to({ element: event.target });
          responsiveVoice.speak(facilitator.getText(event.target));
			 } );     
       $(document).on('keydown',null,'a', function () {
         var pos = facilitator.showReference();
         var posText = facilitator.getTextualPosition();
         responsiveVoice.speak(posText);
       });
       $(document).on('keydown',null,'z', function () {
         facilitator.hideReference();
       });
    };

    return {
      init : init
    };
  }
);