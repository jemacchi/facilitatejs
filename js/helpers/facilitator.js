define([
    'class',
    'jquery',
    '../../lib/jquery.plainoverlay.min',
    '../../lib/jquery.hotkeys'
  ],
  /**
   * Facilitator
   * @exports facilitators   
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Inheritance, $, Overlay, Hotkeys) {
    'use strict';
   /**
    * Facilitator functions
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	  * @class Facilitator
    */	
    var Facilitator = Class.extend(
	/** @lends Facilitator.prototype */
	{
	    init: function() {},
	  /**
		* getText from an element
		*/
		getText: function (elem) { 
      return $(elem).text(); 
    },
    
    showReference: function () { 
       $('body').plainOverlay('show');
     },
     
    hideReference: function () { 
       $('body').plainOverlay('hide');
    },
  });

    return Facilitator;
  }
);