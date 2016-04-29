
angular.module('crudwithangularjs').controller('NewAdresController', function ($scope, $location, locationParser, flash, AdresResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.adres = $scope.adres || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            flash.setMessage({'type':'success','text':'The adres was created successfully.'});
            $location.path('/Adres');
        };
        var errorCallback = function(response) {
            if(response && response.data && response.data.message) {
                flash.setMessage({'type': 'error', 'text': response.data.message}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        };
        AdresResource.save($scope.adres, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Adres");
    };
});