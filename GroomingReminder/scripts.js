var groomingReminder = angular.module('groomingReminder', ["jqwidgets"]);

groomingReminder.controller('mainController', function($scope){
  $scope.date = new Date();
  $scope.state = "";
  $scope.userinfo = {
    username: '',
    email: '',
    petName: ''
  };
  $scope.reminder = {
    reminder: '',
    time: ''
  }

  $scope.calendarSettings =
    {
      width: 240,
      height: 260,
      titleHeight: 30
    }

  $scope.turnPage = function(page){
    $scope.state = page;
  };

  $scope.validateInput = function(){
    if ($scope.userinfo.username && $scope.userinfo.email && $scope.userinfo.petName){
      $scope.state = 'confirmInput';
    } else {
      alert('Please fill out all the fields!');
    }
  };

  $scope.validateReminder = function(){
    if ($scope.date && $scope.date) {
      $scope.state = 'confirmReminder';
    } else {
      alert('Please choose a valid date and time!');
    }
  }

  $scope.emailReminder = function(){
    $scope.state = 'final';
  }

});
