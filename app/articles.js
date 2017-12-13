angular.module('articles', [])
.controller('ArticlesController', function($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
        then(function(response) {
            $scope.returnedArticles = response.data;
        });
});