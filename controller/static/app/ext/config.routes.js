(function(){
	'use strict';

	angular
		.module('shipyard.ext')
		.config(getRoutes);

	getRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

	function getRoutes($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('dashboard.ext', {
			    url: '^/ext',
			    templateUrl: 'app/ext/ext.html',
                            controller: 'ExtController',
                            controllerAs: 'vm',
                            authenticate: true,
			});
	}
})();
