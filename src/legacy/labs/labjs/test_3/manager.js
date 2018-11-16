
var bb_domcontentloaded = false;

if ( document.addEventListener ) {
	document.addEventListener( "DOMContentLoaded", function(){
		bb_domcontentloaded = true;
	}, false );
}

function initDom(){
	
	var widget = $('#widget');
	var isReady = jQuery.isReady;
	
	widget.bind('click', function(e){
		e.preventDefault();
		alert('JS event attached!');
	});
	widget.removeClass('red');
	widget.addClass('green');
	widget.text('Javascript has executed! jQuery.isReady='+isReady);;

}

function initPage() {

	if((document.readyState  && /loaded|complete/.test(document.readyState)) || bb_domcontentloaded === true){
		initDom();
	} else {
		$(document).ready(function() {
			initDom();
		});
	}
}

$LAB
.script('jquery.js')
.script('swfobject_src.js')
.block(function(){
	$LAB
	.script('shadowbox.js')
	.script('jquery-ui.js')
	.script('jquery.uploadify.js')
	.script('jquery.growl.js')
	.script('jquery.history.js')
	.script('jquery.form.js')
	.block(function(){
		$LAB
		.script('jquery.validate.js')
		.block(function(){
			$LAB
			.script('jquery.form.wizard-0.9.6.js')
			.block(function(){
				$LAB
				.block(function(){
					initDom();
				});
			});
		});
	});
});
