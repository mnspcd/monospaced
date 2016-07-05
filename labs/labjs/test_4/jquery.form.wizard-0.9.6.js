/*
 * jQuery wizard plug-in 0.9.4
 *
 *
 * Copyright (c) 2009 Jan Sundman (jan.sundman[at]aland.net)
 *
 * Licensed under the MIT licens:
 *   http://www.opensource.org/licenses/mit-license.php
 *   
 *
 * Changelog:
 * 
 * version 0.9.6
 * -------------
 * - Fix for enabling select validation
 * 
 * version 0.9.5
 * -------------
 * - Fix for enabling optional validation
 *
 * version 0.9.4
 * -------------
 * - Performance fixes for validation of the steps
 * - Performance fixes for rendering of the steps
 * - Introduces a need for input fields in the wizard to be disabled in the html
 *
 * version 0.9.3
 * ------------- 
 * - Fixed the continueToNextStep and backButton.click callback to handle navigation correctly when the 
 * history plugin is not used
 * 
 * version 0.9.2 
 * -------------
 * - A check was added to see if there are multiple links on one step. In the
 * case there are we assume they are radio buttons or checkboxes. Only the
 * one that is checked is considered a valid link. This fixes a bug where links
 * in the form of radio buttons do not work. Credits to adnanshareef for 
 * reporting the bug.  
 * 
 * - Added initial functionality for doing server-side validation 
 * 
 * version 0.9.1 
 * -------------
 * - Addition of afterNext and afterBack callbacks, can be used to do stuff after
 * the rendering of a step has been completed
 * 
 * version 0.9.0 
 * -------------
 * - Initial release
 *
 */
   
(function($){
	

  $.fn.formwizard = function(wizardSettings, validationSettings, formOptions){
	
	/**
	 * Creates a wizard of all matched elements
	 *
	 * @constructor
	 * @name $.formwizard
	 * @param Hash wizardSettings A set of key/value pairs to set as configuration properties for the wizard plugin.
	 * @param Hash validationSettings A set of key/value pairs to set as configuration properties for the validation plugin.
	 * @param Hash formOptions A set of key/value pairs to set as configuration properties for the form plugin.
	 */	  	
	
	var settings = $.extend({
		historyEnabled	: false,
		validationEnabled : false,
		formPluginEnabled : false,
		linkClass	: ".link",
		submitStepClass : ".submit_step",
		back : ":reset",
		next : ":submit",
		textSubmit : 'Submit',
		textNext : 'Next',
		textBack : 'Back',
		afterNext: undefined,
		afterBack: undefined,
		serverSideValidationUrls : undefined
	}, wizardSettings);

	var formOptionsSuccess = (formOptions)?formOptions.success:undefined;
	var formSettings = $.extend(formOptions,{
		success	: function(data){ 
			if(formOptions && formOptions.resetForm || !formOptions){
				navigate(0);
				if(settings.historyEnabled){
					$.historyLoad(0);
				}else{
					renderStep();
				}
			}
			if(formOptionsSuccess){
				formOptionsSuccess(data);
			}else{
				alert("success");
			}
		}
	});
	var currentStep = 0;
	var previousStep = undefined;	
	var form = $(this);
	var steps = $(this).find(".step");
	var backButton = $(this).find(settings.back);
	var nextButton = $(this).find(settings.next);
	var activatedSteps = new Array();
	var isLastStep = false;	

	/** 
	 * Navigation event callbacks 
	 */
	nextButton.click(function(){		
		if(settings.validationEnabled){
			var valid = true;
			$.each(form.find("input:enabled, select:enabled"), function(){
				if(form.validate().element($(this)) == false)
					valid = false;
			})
			if(!valid) return false;
		}
		if(isLastStep){
			if(settings.formPluginEnabled){
				form.ajaxSubmit(formSettings);
				return false;
			}
			form.submit();
			return false;
		}

		// Doing server side validation for the steps
		if(settings.serverSideValidationUrls){
		  var url = "";
		  var errorCallback = undefined;
		  $.each(settings.serverSideValidationUrls, function(){
		     if(this.validation.step == currentStep){ 
			url = this.validation.url;
			errorCallback = this.validation.error;
		     }
		  });

		  if(url != ""){
			form.ajaxSubmit({url : url, 
				success: function(){continueToNextStep();},
				error: function(){errorCallback();}
			 });
			alert("server side done");
			return false;
		  }
		}
		continueToNextStep();
		return false;
	});

	backButton.click(function(){
		if(settings.historyEnabled && activatedSteps.length > 0){
			history.back();
		}else if(activatedSteps.length > 0){
			handleHistory(activatedSteps[activatedSteps.length - 2]);
		}
		if(settings.afterBack)	
			settings.afterBack();
		return false;
	});

	/**
	 * Continues to the next step in the wizard
	 */
	function continueToNextStep(){
		navigate(currentStep);
		renderStep();

		if(settings.historyEnabled){
			$.historyLoad(currentStep);
		}else{
			handleHistory(currentStep);
		}

		if(settings.afterNext)
			settings.afterNext();
	}

    /**
     * Renders the current step and disables the input fields in other steps
     *
     * @name renderStep
     * @type undefined
     */
	function renderStep(){
		backButton.removeAttr("disabled");
		nextButton.val(settings.textNext);

			if(previousStep != undefined){
				steps.eq(previousStep).hide()
					.find(":input")
					.attr("disabled","disabled");
			}

			steps.eq(currentStep)
			.fadeIn()
			.find(":input")
			.removeAttr("disabled");

		if(isLastStep){
			for(var i = 0; i < activatedSteps.length; i++){
				steps.eq(activatedSteps[i]).find(":input").removeAttr("disabled");
			}
			nextButton.val(settings.textSubmit);
		}else if(currentStep == 0){
			backButton.attr("disabled","disabled");
		}
	}

    /**
     * Checks if the step is the last step in a wizard route
     *
     * @name checkIflastStep
     * @type undefined
     * @param Number step The step to check.
     */			
	function checkIflastStep(step){
		var link = getLink(step);

		isLastStep = false;
		
		if((("." + link) == settings.submitStepClass) || (link == undefined && (step*1) == steps.length - 1)){
			isLastStep = true;
		}
	}

    /**
     * Decides and sets the current step in the wizard 
     *
     * @name navigate
     * @type undefined
     * @param Number step The step to navigate from.
     */
	function navigate(step){
		var link = getLink(step);

		if(link){					
			var navigationTarget = steps.index($("#" + link));	
			if(navigationTarget == -1){
				return;
			}else{
				previousStep = currentStep;
				currentStep = navigationTarget;	
			}
			checkIflastStep(step);			
		}else if(link == undefined && !isLastStep){	
			previousStep = currentStep;
			currentStep++;
			checkIflastStep(currentStep);
		}
	}

    /**
     * Finds the valid link for the step (if there is one)
     *
     * @name getLink
     * @type String
     * @param Number step The step to search for valid links
     */
	function getLink(step){
		var link = undefined;
		var links = steps.eq((step*1)).find(settings.linkClass);

		if(links != undefined && links.length == 1){
			link = links.val();
		}else if(links != undefined && links.length > 1){ 
			// assume that the link is a radio button or checkbox
			link = steps.eq((step*1)).find(settings.linkClass + ":checked").val();
		}
		return link;
	}

    /**
     * Handles back navigation (and browser back and forward buttons if history is enabled)
     *
     * @name handleHistory
     * @type undefined
     * @param String hash The hash used in the browser history
     */
	function handleHistory(hash){
		if(!hash){
			hash = 0;
		}
		if(activatedSteps[activatedSteps.length - 2] == hash){
			var elem = activatedSteps.pop();	
		}else {
			activatedSteps.push(hash);
		}
		previousStep = currentStep;
		currentStep = hash;
		checkIflastStep(hash);
		renderStep();
	}
	
    /**
     * Initialization
     */

	if(settings.historyEnabled && $.historyInit  == undefined){
		settings.historyEnabled = false;
		alert("the history plugin needs to be included");
	}else if(settings.historyEnabled){
		$.historyInit(handleHistory);
	}else{
		handleHistory(0);
  }
	
	if(settings.validationEnabled && jQuery().validate  == undefined){
		settings.validationEnabled = false;
		alert("the validation plugin needs to be included");
	}else if(settings.validationEnabled){
		form.validate(validationSettings);
	}
	
	if(settings.formPluginEnabled && jQuery().ajaxSubmit == undefined){
		settings.formPluginEnabled = false;
		alert("the form plugin needs to be included");
	}

	steps.hide();
	renderStep();
	backButton.val(settings.textBack);
    return $(this);
  };
})(jQuery);
