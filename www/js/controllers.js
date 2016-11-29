angular.module('starter.controllers', ['ionic.contrib.NativeDrawer'])

.controller('AppCtrl', function($scope) {

})

.controller('HomeCtrl', function($scope) {
	  if(ionic.Platform.isAndroid())
  {
	  alert('hello android');
	 
				
  }
  else
  {
	  alert('hello NO ANDROID');
  }
});
