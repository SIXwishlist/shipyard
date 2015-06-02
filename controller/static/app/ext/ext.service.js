(function(){
	'use strict';

	angular
		.module('shipyard.ext')
        .factory('ExtService', ExtService);

	ExtService.$inject = ['$http'];
        function ExtService($http) {
            return {
                list: function() {
                    var promise = $http
                        .get('/api/ext')
                        .then(function(response) {
                            return response.data;
                        });
                    return promise;
                },
            } 
        } 
})();
