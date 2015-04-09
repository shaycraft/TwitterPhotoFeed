/**
 * Created by Sam on 4/7/2015.
 */
(function() {
    var mod = angular.module("TwitterPhotoFeed", []);
    mod.controller("TwitterController", ['$scope', '$http',
        function($scope, $http) {
            var addMessage = function(msg) {
                $scope.DebugOutput = $scope.DebugOutput + msg + "<br />"
            }

            $scope.clearMessage = function() {
                $scope.DebugOutput = "";
            }

            $scope.DebugOutput="";
            $scope.getPhotoFeed = function(txtTwitterId) {
                addMessage("txtTwitterId = " + txtTwitterId);
                $http.get("http://shaycraft.cloudapp.net/TwitterPhotoFeed/gettoken.py")
                    .then(function(response) {
                       var token = response.data;
                        addMessage("Got token = " + token);

                        var svc_url = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=' + txtTwitterId + '&count=200&exclude_replies=true ';
                        var svc_headers = {'Authorization' : 'Bearer ' + token };
                        addMessage('svc_headers = ' + JSON.stringify(svc_headers));

                        //serviceModule.$httpProvider.defaults.headers.common['Authorization'] = "Bearer " + token;
                        $http.defaults.headers.common.Authorization = 'Bearer' + token;

                        $http.get(svc_url)
                            .then(function(twit_response) {
                               addMessage("Twitter needs to suck a dick.");
                            });

                        /*var req = {
                          method: 'GET',
                            url: svc_url,
                            withCredentials: true,
                            headers: {
                                'Authorization': 'Bearer ' + token
                            }
                        };
                        var twit_config = {
                          withCredentials: true,
                            headers: {
                                'Authorization' : 'Bearer ' + encodeURIComponent(token)
                            }
                        };

                        addMessage(JSON.stringify(req));

                        $http.jsonp(svc_url, twit_config)
                            .then(function(twit_response) {
                               console.log(twit_response);
                            });*/
                        // none of the above shit works, tying something different
                       /* var consumerKey = encodeURIComponent('EG256Euv4bVpbcAx6F8QjiCQ3');
                        var consumerSecret = encodeURIComponent('p19nAu1GmoyJX2EGeN5DRAk4yJ9jDeFZOiqpsL4gWCbp0JEykv');
                        var credentials = btoa(consumerKey + ':' + consumerSecret);
                        // Twitters OAuth service endpoint
                        var twitterOauthEndpoint = $http.post(
                            'https://api.twitter.com/oauth2/token'
                            , "grant_type=client_credentials"
                            , {headers: {'Authorization': 'Basic ' + credentials, 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}}
                        )
                        twitterOauthEndpoint.success(function (response) {
                            // a successful response will return
                            // the "bearer" token which is registered
                            // to the $httpProvider
                            addMessage("Got access_token = " + response.access_token);
                            serviceModule.$httpProvider.defaults.headers.common['Authorization'] = "Bearer " + response.access_token
                        }).error(function (response) {
                            // error handling to some meaningful extent
                        });*/
                    });
            }
        }]);
    mod.filter("unsafe", function($sce) {
       return function(val) {
           return $sce.trustAsHtml(val);
       };
    });
})();