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


                var api_key = 'EG256Euv4bVpbcAx6F8QjiCQ3';
                var secret_key = 'p19nAu1GmoyJX2EGeN5DRAk4yJ9jDeFZOiqpsL4gWCbp0JEykv';
                var str_req = api_key + ':' + secret_key;
                var base64_str = btoa(str_req);
                var oauthurl = 'https://api.twitter.com/oauth2/token';

                var payload = 'grant_type=client_credentials';
                var oauthheaders = {'Authorization': 'Basic ' + base64_str,  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'};

                //console.log(JSON.stringify(oauthheaders));
                $scope.DebugOutput = addMessage($scope.DebugOutput, JSON.stringify(oauthheaders));
            }

        }]);
}
)();