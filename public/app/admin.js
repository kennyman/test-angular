angular.module('BoFAdmin', [])
    
    .controller('Profiles', function($scope, $http) {

        $scope.page = 1;
        $scope.limit = 15,

        $scope.loadPage = function() {
            console.log('loaded');

            $http.get('/profiles?_page=' + $scope.page + '&_limit=' + $scope.limit).
                then(function(response) {
                    $scope.total = response.headers('X-Total-Count');
                    $scope.profiles = response.data;
                    $scope.loadPagination();
                });
        };

        $scope.loadPagination = function() {
            var range = [];
            for(var i=1;i<=Math.ceil($scope.total/$scope.limit);i++) {
              range.push(i);
            }
            $scope.range = range;
        }

        $scope.loadPage();
    
    });