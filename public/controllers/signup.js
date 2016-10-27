angular.module('MyApp')
  .controller('SignupCtrl', function($scope, Auth) {
    $scope.signup = function() {
      Auth.signup({
        name: $scope.displayName,
        email: $scope.email,
        phone: $scope.phoneNumber,
        dob: $scope.dob,
        gender: $scope.gender,
        password: $scope.password
      });
    };
    $scope.open2 = function() {
    $scope.popup2.opened = true;
    };
  $scope.formats = ['dd-MM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['d!-M!-yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };
    $scope.pageClass = 'fadeZoom';
  });