(function(){
	'use strict';

	angular
		.module('shipyard.ext')
		.controller('ExtController', ExtController);

	ExtController.$inject = ['ExtService', '$state', '$timeout'];
	function ExtController(ExtService, $state, $timeout) {
            var vm = this;
            vm.refresh = refresh;

            function refresh() {
                ExtService.list()
                    .then(function(data) {
                        // update data
                    }, function(data) {
                        vm.error = data;
                    });
                vm.error = "";
            }
	}
})();
