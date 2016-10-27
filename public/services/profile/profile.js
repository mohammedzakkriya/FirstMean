angular.module('MyApp')
  .factory('Profile', function($resource) {
    //return $resource('/api/profile/:_id');
    return $resource('/api/profile/:_id', null, {
    update: {
      method: 'PUT'
    }
  });
  });