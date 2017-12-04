angular.module('repoFetcher', [])
  .controller('repoFetcherCtrl', function($scope, $http) {
    $scope.searchTerm = '';
    $scope.searchResults = null;

    $scope.getRepos = function() {
      alert($scope.searchTerm);
    }
  });