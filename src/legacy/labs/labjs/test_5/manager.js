function initDom(){

	var widget = $('#widget');
	var isReady = jQuery.isReady;
	
	widget.bind('click', function(e){
		e.preventDefault();
		alert('JS event attached!');
	});
	widget.removeClass('red');
	widget.addClass('green');
	widget.text('Javascript has executed! jQuery.isReady='+isReady);

	document.body.style.visibility = 'visible';
	
}


$LAB
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
					$(document).ready(function() {
						initDom();
					});
				});
			});
		});
	});
});