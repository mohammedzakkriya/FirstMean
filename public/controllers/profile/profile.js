angular.module('MyApp')
  .controller('ProfileCtrl', function($scope, $routeParams, Profile, $alert, $location, Auth) {
    $scope.editmode = false;
    Profile.get({ _id: $routeParams.id }, function(user) {
        $scope.profile = user;
        //$scope.profile.password = user.password;
        $scope.profile.dob = new Date(user.dob);
        $scope.profile.password = '';
        $scope.enableEditMode = function() {
          $scope.editmode = true;
        };
        $scope.editprofile = function() {
          Profile.update({ _id: $routeParams.id }, $scope.profile, function() {
            //$location.path('/');
            $alert({
                  title: 'Cheers!',
                  content: 'You have successfully updated your profile account',
                  animation: 'fadeZoomFadeDown',
                  type: 'material',
                  duration: 3
                });
          });
          Auth.logout();
          $location.path('/login');
        }
        $scope.formats = ['dd-MM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.altInputFormats = ['d!-M!-yyyy'];

        $scope.popup1 = {
          opened: false
        };

        $scope.popup2 = {
          opened: false
        };
        $scope.open2 = function() {
        $scope.popup2.opened = true;
        };
    });

  });