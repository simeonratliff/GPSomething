// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('myApp', ['ionic', 'ngCordova'])

// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//     // for form inputs)
//     if(window.cordova && window.cordova.plugins.Keyboard) {
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//     }
//     if(window.StatusBar) {
//       StatusBar.styleDefault();
//     }
//   })
// })
  .controller('TestController', function($scope, $cordovaGeolocation){
    console.log("console.log works well");
    $scope.latitude = 41423423;
    $scope.longitude = 123123;
    $scope.lastPosition = {};
    $scope.message = "";
    $scope.doSomething = function(){
      console.log('message:' + $scope.message)
      var posOptions = {timeout: 10000, enableHighAccuracy: false};
   $cordovaGeolocation
     .getCurrentPosition(posOptions)
     .then(function (position) {
       $scope.lastPosition = position;
       console.log(position);
      $scope.latitude =   position.coords.latitude
       $scope.longitude =  position.coords.longitude
     }, function(err) {
       // error
       console.log(err);
     });
    };


 //    var posOptions = {timeout: 10000, enableHighAccuracy: false};
 // $cordovaGeolocation
 //   .getCurrentPosition(posOptions)
 //   .then(function (position) {
 //     var lat  = position.coords.latitude
 //     var long = position.coords.longitude
 //   }, function(err) {
 //     // error
 //     console.log(err);
 //   });

 //
 // var watchOptions = {
 //   frequency : 1000,
 //   timeout : 3000,
 //   enableHighAccuracy: false // may cause errors if true
 // };
 //
 // var watch = $cordovaGeolocation.watchPosition(watchOptions);
 // watch.then(
 //   null,
 //   function(err) {
 //     // error
 //   },
 //   function(position) {
 //     var lat  = position.coords.latitude
 //     var long = position.coords.longitude
 //     console.log(position);
 // });
 //
 //
 // watch.clearWatch();
 // // OR
 // $cordovaGeolocation.clearWatch(watch)
 //   .then(function(result) {
 //     // success
 //     console.log(result);
 //
 //     }, function (error) {
 //       console.log(error);
 //
 //     // error
 //   });
  });
