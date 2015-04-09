/**
 * Created by Sam on 4/7/2015.
 */
(function() {
    var addMessage = function(source, msg) {
        if (source != "") {
            source = source + "<br />";
        }
        source = source + msg;
        return source;
    }

    var mod = angular.module("TwitterPhotoFeed", []);
    mod.controller("TwitterController", ['$scope', '$http',
        function($scope, $http) {
            $scope.DebugOutput="";
            $scope.getPhotoFeed = function(txtTwitterId) {
                $scope.DebugOutput = txtTwitterId;

                $http.get("http://shaycraft.cloudapp.net/TwitterPhotoFeed/gettoken.py")
                    .then(function(response) {
                        var token = response.data;
                    });
            }

        }]);
}
)();