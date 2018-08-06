/**
 * @fileoverview 
 * 
 * @author IH & SB @ Grand Union [thegrandunion.com]
 * 
 */
var shadowBoxResize = function(){
	
	/**
	 * Private variables
	 *
 	 * @var var
 	 * @private
 	 */
	var	targetWidth,
		targetHeight,
		targetLeft,
		targetTop,
		parentWidth,
		parentHeight,
		bodyWidth;
		
	/**
	 * The options passed through to this function
	 *
	 * @var object
	 * @private
	 */	
	var options = {     
		/**
		 * distance between overlay and viewport
  	 *
   	 * @var int
   	 */
		padding : 0,
		/**
		 * id of HTML element with css width for resize
  	 *
   	 * @var string
   	 */
		container : '',
		/**
		 * height of the title bar to hide
  	 *
   	 * @var int
   	 */
		titleHeight: 0
	};

	/**
   * Initialise the functionality
   * @param {Object} options The initialisation options
	 * @return void
	 * @public
	 */
	var init = function(initOptions) {
	// save any options sent through to the intialisation script, if set
		for (var option in options) {
			if (!!initOptions[option] || initOptions[option] === false) {
    		options[option] = initOptions[option];
      }
      // error check, if no element is specified then stop
      if (!options[option] && options[option] !== false) {
      	return false;
      }
    }
    // error check, don't initialise if content isn't found 
	  if ($(options.elements).length < 1) {
	  	return false;
	  }
		// intialise
    initShadowBoxResize(options.elements);
  };

	/*
	 * function to 
	 */
	function initShadowBoxResize(els) {
		
		// set required styles on the body element
		bodyWidth = $(options.container).css('width');
		$('body').css('float','left');
		$('body').css('width',bodyWidth);
		
		// Temp vars
		var thisWidth = $('body').innerWidth(),
			thisHeight = $('body').outerHeight();

		// Get the width & height from the shadowbox's content size.	
		parentWidth = window.parent.document.documentElement.clientWidth * 1;
		parentHeight = window.parent.document.documentElement.clientHeight * 1;
		targetWidth = (thisWidth > parentWidth) ? parentWidth - (options.padding * 2) : thisWidth;
		targetHeight = (thisHeight > parentHeight) ? parentHeight - (options.padding * 2) : thisHeight;
		targetLeft = (parentWidth / 2) - (targetWidth / 2);
		targetTop = ((parentHeight / 2) - (targetHeight / 2)) - options.titleHeight;
		
		// Manaully set the width & height for resize.
		window.parent.Shadowbox.content.width = targetWidth;
		window.parent.Shadowbox.content.height = targetHeight;
	
		// Adjust the width.
		window.parent.Shadowbox.skin.resizeContentManual(targetHeight, targetWidth, targetTop, targetLeft, true);

	}
    
	/**
	 * Return value, expose certain methods above
	 */
  return {
  	init: init
  };
  
}();

/*
 * Example call:

	$(document).ready(function(){
  
	    if(!!window.parent.Shadowbox && $('.overlay-resize').length > 0) {
			shadowBoxResize.init({
		    	padding : 40,
		     	container: 'body.overlay-resize',
		     	titleHeight: 26
		    });
		}
		
	)};

 */