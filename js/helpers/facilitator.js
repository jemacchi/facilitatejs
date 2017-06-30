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
      currentMousePos:null,
	    init: function() {
        $(function($) {
            parent.currentMousePos = { x: -1, y: -1 };
            $(document).mousemove(function(event) {
                parent.currentMousePos.x = event.pageX;
                parent.currentMousePos.y = event.pageY;
            });
        });
      },
	  /**
		* getText from an element
		*/
		getText: function (elem) { 
      return $(elem).text(); 
    },
    getTextualPosition: function () { 
      //var wSizeWidth = $(window).width();
      //var wSizeHeight = $(window).height();
      var w = window, 
          d = document,
          e = d.documentElement,
          g = d.getElementsByTagName('body')[0],
          x = w.innerWidth || e.clientWidth || g.clientWidth,
          y = w.innerHeight|| e.clientHeight|| g.clientHeight;
      var pHorizontal = parent.currentMousePos.x/x ;
      var pVertical = parent.currentMousePos.y/y ;
      console.log(pHorizontal+'-'+pVertical);
      var pReturn = '';
      if (pHorizontal <= 0.25) pReturn += 'Left';
      if (pHorizontal > 0.25 && pHorizontal <= 0.75) pReturn += 'Center';
      if (pHorizontal > 0.75) pReturn += 'Right';
      pReturn += ' ';
      if (pVertical <= 0.25) pReturn += 'Top';
      if (pVertical > 0.25 && pVertical <= 0.75) pReturn += 'Middle';
      if (pVertical > 0.75) pReturn += 'Bottom';
      return pReturn ;
    },
    showReference: function () { 
       $('body').plainOverlay({
          progress: function() { 
            return ; 
          }
       }).plainOverlay('show');
       return parent.currentMousePos;
    },
    hideReference: function () { 
       $('body').plainOverlay('hide');
    },
  });

    return Facilitator;
  }
);