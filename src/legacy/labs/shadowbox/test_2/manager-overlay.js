
function initDom(){

	if(!!window.parent.Shadowbox && $('.overlay-resize').length > 0) {
		shadowBoxResize.init({
	    	padding : 40,
	     	container: 'body.overlay-resize',
	     	titleHeight: 26
	    });
	}
	
}

$LAB
.script('../shadowbox/shadowbox-resize.js')
.block(function(){
	$(document).ready(function() {
		initDom();
	});
});
