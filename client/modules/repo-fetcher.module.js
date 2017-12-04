angular.module('repoFetcher', ['ngMaterial'])
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
          if (!results.data.items.length) {
            alert('No results for given search term!');
            return;
          }
          $scope.searchResults = results.data.items.sort(function(a, b) {
            var name1 = a.name.toLowerCase();
            var name2 = b.name.toLowerCase();

            if (name1 < name2) {
              return -1;
            } else if (name1 > name2) {
              return 1;
            } else {
              return 0;
            }
          });
          $scope.searchTerm = '';
          console.log($scope.searchResults);
        }, function(error) {
          throw error;
        });
    }
  });