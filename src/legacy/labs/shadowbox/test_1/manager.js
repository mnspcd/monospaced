
Shadowbox.init({
    players:    ['iframe'],
    skipSetup: true
});


function initDom(){

	var elOverlayLinks = $('a.overlay');
	
    if(elOverlayLinks.length > 0) {
    	var elOverlayLinks = $('a.overlay:not(.override)');
	    Shadowbox.setup(elOverlayLinks, {
        	player: 'iframe',
        	height:160,
        	width:320
        });
        var overlayLinksOverride = $('a.overlay.override');
        if (overlayLinksOverride.length > 0) {
	        Shadowbox.setup(overlayLinksOverride, {
	            player: 'iframe',
	            height: 640,
	            width: 800
	        });
        }
	}
}

$(document).ready(function() {
	initDom();
});
