
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
	
	document.body.style.visibility = 'visible';
}

$LAB
.script('../shadowbox/shadowbox.js')
.block(function(){
	$LAB
	.script('../shadowbox/languages/shadowbox-en.js')
	.script('../shadowbox/players/shadowbox-iframe.js')
	.block(function(){
		$LAB
		.script('../shadowbox/adapters/shadowbox-jquery.js')
		.block(function(){
			$(document).ready(function() {
				initDom();
			});
		});
	});
});
