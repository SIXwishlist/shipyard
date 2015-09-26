(function(){
	'use strict';

	angular
		.module('shipyard.volumes')
		.config(getRoutes);

	getRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

	function getRoutes($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('dashboard.volumes', {
			    url: '^/volumes',
			    templateUrl: 'app/volumes/volumes.html',
                            controller: 'VolumesController',
                            controllerAs: 'vm',
                            authenticate: 'true',
                            resolve: {
                                volumes: ['VolumesService', '$state', '$stateParams', function (VolumesService, $state, $stateParams) {
                                    return VolumesService.list().then(null, function(errorData) {
                                        $state.go('error');
                                    });
                                }]
                            }
			});
	}
})();
