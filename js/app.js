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
       document.querySelector( 'body' ).addEventListener( 'click', function( event ) {
          event.preventDefault();
          zoom.to({ element: event.target });
          responsiveVoice.speak(facilitator.getText(event.target));
			 } );     
       $(document).on('keydown',null,'a', function () {
         facilitator.showReference();
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