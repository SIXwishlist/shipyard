(function(){
	'use strict';

	angular
	    .module('shipyard.volumes')
            .factory('VolumesService', VolumesService);

	VolumesService.$inject = ['$http'];
        function VolumesService($http) {
            return {
                list: function() {
                    var promise = $http
                        .get('/volumes')
                        .then(function(response) {
                            return response.data.Volumes;
                        });
                    return promise;
                },
                remove: function(volume) {
                    var promise = $http
                        .delete('/volumes/' + volume.Name)
                        .then(function(response) {
                            return response.data;
                        });
                    return promise;
                }
            };
        }
})();
