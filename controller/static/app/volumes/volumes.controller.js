(function(){
    'use strict';
    
    angular
    	.module('shipyard.volumes')
    	.controller('VolumesController', VolumesController);
    
    VolumesController.$inject = ['volumes', 'VolumesService', '$state', '$timeout', '$scope'];
    function VolumesController(volumes, VolumesService, $state, $timeout, $scope) {
        var vm = this;
        vm.volumes = volumes;
        vm.selectedVolume = null;
        vm.refresh = refresh;
        vm.removeVolume = removeVolume;
        vm.showRemoveVolumeDialog = showRemoveVolumeDialog;
        vm.error = "";
    
        function showRemoveVolumeDialog(volume) {
            vm.selectedVolume = volume;
            $('#remove-modal').modal('show');
        }
    
        function refresh() {
            VolumesService.list()
                .then(function(data) {
                    vm.volumes = data;
                }, function(data) {
                    vm.error = data;
                });
                vm.error = "";
        }
    
        function removeVolume() {
            VolumesService.remove(vm.selectedVolume)
                .then(function(data) {
                    vm.error = "";
                    vm.refresh();
                }, function(data) {
                    vm.error = data.status + ": " + data.data;
                });
        }
    }
})();
