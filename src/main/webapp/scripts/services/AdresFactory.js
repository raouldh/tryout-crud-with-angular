angular.module('crudwithangularjs').factory('AdresResource', function($resource){
    var resource = $resource('rest/adres/:AdresId',{AdresId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});