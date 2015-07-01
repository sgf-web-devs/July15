angular.module('stomp', ['ui.utils'])
    .controller('SearchController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {

        $scope.search = function() {

            // Would like to put this kind of stuff in a service
            // Just testing for now
            $http.get('/spotify/search/?q=' + $scope.spotifySearch)
                .then(function(response) {
                    var results = response.data;

                    if(typeof results.error == 'undefined') { // can probably do some better error checking
                        $scope.albums = results.albums.items;
                        $scope.artists = results.artists.items;
                        $scope.tracks = results.tracks.items;
                    }
                });
        };

        $scope.addToQueue = function(trackId) {
            $http.get('/spotify/addToQueue/?trackId=' + trackId)
                .then(function(response) {
                    var data = response.data;

                    //console.log(data);
                    $rootScope.$broadcast('updateLocalQueue', data);
                });
        }

    }]);
