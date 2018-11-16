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

}

$(document).ready(function() {
	initDom();
});
