/**
 * Created by Sam on 4/7/2015.
 */
(function() {
    $(document).ready(function() {
       console.log('initializing...');
    });

    var mod = angular.module("TwitterPhotoFeed", []);
    mod.controller("TwitterController", ['$scope', '$http',
        function($scope, $http) {
            $scope.getPhotoFeed = function(txtTwitterId) {
                alert(txtTwitterId);
            }

        }]);
}
)();