angular.module('repoFetcher', [])
  .controller('repoFetcherCtrl', function($scope, $http) {
    $scope.searchTerm = '';
    $scope.searchResults = null;

    $scope.getRepos = function() {
      if (!$scope.searchTerm) {
        alert('Please input a valid search term!');
        return;
      }
      
      $http.get(`https://api.github.com/search/repositories?q=${$scope.searchTerm}`)
        .then(function(results) {
          $scope.searchResults = results.data.items;
          console.log($scope.searchResults);
        }, function(error) {
          console.log(error);
        });
    }
  });