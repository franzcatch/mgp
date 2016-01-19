define([],
	function () {
	    'use strict';
	    requirejs.config({
	        baseUrl: 'App/areas'
	    });

	    //now begin page ...stuff
	    require(['shell/shellViewModel'],
				function (shellViewModel) {
				    var vm = new shellViewModel();
				    
				    pager.extendWithPage(vm);

				    ko.applyBindings(vm);

				    pager.start();
				});
	});