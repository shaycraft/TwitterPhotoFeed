/**
 * Created by Sam on 4/7/2015.
 */
(function() {

    var mod = angular.module("TwitterPhotoFeed", []);
    mod.controller("TwitterController", ['$scope', '$http',
        function($scope, $http) {
            $scope.DebugOutput="";
            $scope.getPhotoFeed = function(txtTwitterId) {
                $scope.DebugOutput = txtTwitterId;

                
            }

        }]);
}
)();