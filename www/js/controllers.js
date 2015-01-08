angular.module('starter.controllers', ['ionic', 'firebase'])

.controller('MapCtrl3', function($filter,$scope, $ionicLoading, $compile, $stateParams, Routes, Stopage) {

  //console.log("hhh" , $filter('filter')(Stopage.stopages, { id: 0 }) );

  $scope.mapCreated = function(map) {

        var site = new google.maps.LatLng(55.9879314,-4.3042387);
        var hospital = new google.maps.LatLng(55.8934378,-4.2201905);
      
        var mapOptions = {
          streetViewControl:true,
          center: site,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        /*var map2 = new google.maps.Map(document.getElementById("map"),
            mapOptions);*/


    //$scope.map = map2;
    var route = Routes.get($stateParams.routeId);
    $scope.route = route;
    //parse route.path and get shahbag
    var stopages = route.root.split("-");

    for (var i=0; i < stopages.length; i++){
      console.log("lat", Stopage.get(i));
      
        }
      
      //go to current location in map
      //centerOnMe();
    //}

  /*  $scope.item = Stopage.get(1);
    $scope.test = "Shahbag"; */

    //find info of shahbag and show in map

    //console.log("ada" + Stopage.stopages);
    //console.log("hhh" , $filter('filter')(Stopage.stopages, { id: 0 }) );
  //  console.log('sdfsd', tests);


  /*  var expression = 'eq(item.name, "Shahbag")';

    var newJsonItems = [];

    var playlists = JSON.parse(Stopage.stopages);
    var items = Stopage.stopages.length;
    console.log("adada asdad" , items);

    for(var index = 0; index < items.length; index++){
      var item = Stopage.stopages[index]; // define the item that will be evaluated
      
      console.log("asda" , item);
     
    }

    console.log("sdfsdfff" , newJsonItems);

    //$scope.items = $filter('orderBy')(Stopage.stopages, "name")*/
  }

  //google.maps.event.addDomListener(window, 'load', initialize);

  var centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };
})

.controller('DashCtrl', function($scope) {})

.controller('BusCtrl', function($scope, Friends, Inputs, $firebase) {
  // $scope.friends = Friends.all();
  //$scope.routes  = Routes.all();

  var ref = new Firebase("https://dhakabusmap.firebaseIO.com/routes");
  var sync = $firebase(ref);

  $scope.routes = sync.$asArray();

  $scope.inputs = Inputs;

  /*$scope.myForm = {};
  $scope.myForm.firstName = "";
  $scope.myForm.lastName  = "";*/

})

.controller('LocEntryCtrl', function($scope, $firebase){


  //$scope.stopages = Stopage.all();
  //$scope.stopages = Hello.all();
  //console.log("allll", $scope.stopages);
  /*var ref = new Firebase("https://dhakabusmap.firebaseIO.com/Hello");
  var sync = $firebase(ref);

  $scope.stopages = sync.$asArray();

  console.log("kjdhajd",$scope.stopages);*/

//  
//  var ref = new Firebase("https://dhakabusmap.firebaseIO.com");
//  $scope.messages = $firebase(ref).$asArray();
  //  $scope.messages = Hello.all();
  //var sync = $firebase(ref);
  // download the data into a local object
  //var syncObject = sync.$asObject();

  //console.log("dklfjsld",syncObject);
  //syncObject.$add({name: 'john', phone: '909090'});
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  //syncObject.$bindTo($scope, "stopgae");

  // $scope.messages = Hello;

  var ref = new Firebase("https://dhakabusmap.firebaseIO.com/stopages/");

  var sync = $firebase(ref);
  $scope.stopages = sync.$asArray();
    // create an AngularFire reference to the data
  //var stopRef = ref.child("stopages");
  //var sync = $firebase(stopRef);

    // download the data into a local object
  //$scope.stopage = sync.$asObject();
  //$scope.stopages = sync.$asArray();

  //console.log("Stopage Name: ", $scope.stopage.name);
  //$scope.stopage.$bindTo($scope, "datas");

  $scope.submit = function() {

    var stopRef = ref.child($scope.stopage.id);

    //$scope.messages.$add({from: 'Alexander', body: 'Valo korsos'});
    //$scope.messages.$add({from: 'Alexander', body: 'Valo korsos'});
    //$scope.messages.$add({from: 'Noshu', body: 'bazzinga'});

   /* var stopRef = ref.child("stopages");
    stopRef.push({

      hello: {
          date_of_birth: "June 23, 1912",
          full_name: "Alan Turing"
      }

    });*/
    

    var stop = {
                      id: $scope.stopage.id,
                      name: $scope.stopage.name,
                      latitude: $scope.stopage.latitude,
                      longitude: $scope.stopage.longitude
                    }

     //$scope.stopages.$add(stop);
     stopRef.set(stop);

     $scope.stopage.id = "";
     $scope.stopage.name = "";
     $scope.stopage.latitude = "";
     $scope.stopage.longitude = "";
       /* if ($scope.stopage.id) {
          //$scope.list.push(this.text);
          //$scope.text = '';
          console.log("Entered location" , $scope.stopage.name);

          var stop = {
                      id: $scope.stopage.id,
                      name: $scope.stopage.name,
                      latitude: $scope.stopage.latitude,
                      longitude: $scope.stopage.longitude
                    };

          Stopage.add(stop);


        }*/
      };

})


.controller('RouteEntryCtrl', function($scope, $firebase){

/*  var ref = new Firebase("https://dhakabusmap.firebaseIO.com");
  var routeRef = ref.child("routes");   
  var sync = $firebase(routeRef);

  $scope.routes = sync.$asArray();

  $scope.submit = function(){

    var route  = {

      id: $scope.route.id,
      path: $scope.route.path,
      root: $scope.route.root,
      busNo: $scope.route.busNo,
      busName: $scope.route.busName
    }

    $scope.routes.$add(route);

  };

*/

var ref = new Firebase("https://dhakabusmap.firebaseIO.com/routes/");

var sync = $firebase(ref);
$scope.routes = sync.$asArray();

$scope.submit = function(){

  var routeRef = ref.child($scope.route.id);
  //var sync = $firebase(routeRef);
  //$scope.routes = sync.$asArray();
  //$scope.routes = sync.$asObject();

    var route  = {

      id: $scope.route.id,
      path: $scope.route.path,
      root: $scope.route.root,
      busNo: $scope.route.busNo,
      busName: $scope.route.busName
    }

    //$scope.routes.$add(route);
    routeRef.set(route);

  };

})

.controller('FormCtrl', function($scope, Routes, Data, Inputs){

  //$scope.data = Data;
  var source = "KhamarBari";
  $scope.routes = Routes.findPath($source);
  $scope.inputs = Inputs;
  
  //$scope.myForm = {};
  //$scope.myForm.firstName = "";
  //$scope.myForm.lastName  = "";
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})


.controller('MapCtrl', function($scope, $ionicLoading, $stateParams, $compile, $firebase) {


          function gDirRequest(service, waypoints, userFunction, waypointIndex, path) {
          // set defaults
        
          waypointIndex = typeof waypointIndex !== 'undefined' ? waypointIndex : 0;
          path = typeof path !== 'undefined' ? path : [];

          // get next set of waypoints
          var s = gDirGetNextSet(waypoints, waypointIndex);
          // build request object
          var startl = s[0].shift()["location"];
          var endl = s[0].pop()["location"];
          var request = {
              origin: startl,
              destination: endl,
              waypoints: s[0],
              travelMode: google.maps.TravelMode.WALKING,
              unitSystem: google.maps.UnitSystem.METRIC,
              optimizeWaypoints: false,
              provideRouteAlternatives: false,
              avoidHighways: false,
              avoidTolls: false
          };
          service.route(request, function(response, status) {
              
              if (status == google.maps.DirectionsStatus.OK) {
                  path = path.concat(response.routes[0].overview_path);
                  oldpath = path
                  if (s[1] != null) {
                lastIndx = s[1]
                      gDirRequest(service, waypoints, userFunction, s[1], path)
                  } else {
                      userFunction(path);
                  }

              } else {
            path = oldpath;
            lastIndx = lastIndx+1
            if (s[lastIndx]!= null) {
            gDirRequest(service, waypoints, userFunction,lastIndx , path)
            }
            else{
             userFunction(path);
            }
              }

          });
      }

    function gDirGetNextSet (waypoints, startIndex) {
          var MAX_WAYPOINTS_PER_REQUEST = 8;

          var w = [];    // array of waypoints to return

          if (startIndex > waypoints.length - 1) { return [w, null]; } // no more waypoints to process

          var endIndex = startIndex + MAX_WAYPOINTS_PER_REQUEST;

          // adjust waypoints, because Google allows us to include the start and destination latlongs for free!
          endIndex += 2;

          if (endIndex > waypoints.length - 1) { endIndex = waypoints.length ; }

          for (var i = startIndex; i < endIndex; i++) {
              w.push(waypoints[i]);
          }

          if (endIndex != waypoints.length) {
              return [w, endIndex -= 1];
          } else {
              return [w, null];
          }
      }

      function initialize() {

      var routeId = $stateParams.routeId;
      var waypts = [];


      new Firebase("https://dhakabusmap.firebaseIO.com").once('value', function(snap){

        console.log("Reading from Firebase");
        

        var routeRef = snap.child("routes/" + routeId);
        var route = routeRef.val();
        console.log("Actual Routing Path " , route.path);
        $scope.routing = route;

        var stopages = route.root.split("-");

        for(var i=1; i<stopages.length-1 ; i++){

          var stopRef = snap.child("stopages/" + stopages[i]);
          var stopage = stopRef.val();

          waypts.push({
                location:new google.maps.LatLng(stopage.latitude,stopage.longitude),
                stopover:true
              });

          console.log("Waypoint Stopage :" , stopage.name);

        }
        var firstStop = snap.child("stopages/" + stopages[0]).val();
        var lastStop = snap.child("stopages/" + stopages[stopages.length-1]).val();

        var source = new google.maps.LatLng(firstStop.latitude,firstStop.longitude);
        var dest = new google.maps.LatLng(lastStop.latitude,lastStop.longitude);

        var mapOptions = {
                    zoom: 16,
                    center: source,
                    streetViewControl:true,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                  };
        var map = new google.maps.Map(document.getElementById("map"),mapOptions);

        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer();


        var travelWaypoints = [];

        


        /*var request = {
                  origin : source,
                  destination : dest,
                  waypoints: waypts,
                  optimizeWaypoints: false,
                  travelMode : google.maps.TravelMode.DRIVING
              };
              directionsService.route(request, function(response, status) {
                  if (status == google.maps.DirectionsStatus.OK) {
                      directionsDisplay.setDirections(response);
                      
                  }
              }); */

        for(var i=0; i<stopages.length ; i++){
            var locObject =  snap.child("stopages/" + stopages[i]).val();
            var loc = new google.maps.LatLng(locObject.latitude,locObject.longitude);

            var marker = new MarkerWithLabel({
                position: loc,
                map: map,
                animation: google.maps.Animation.DROP,
                title: 'cool',
                labelContent: locObject.name,
                labelAnchor: new google.maps.Point(-12, 40),
                labelClass: "labels", // the CSS class for the label
                labelStyle: {opacity: 0.75},
                
            });

            travelWaypoints.push({location: loc});
        
            
        }

        // get directions and draw on map
        gDirRequest(directionsService, travelWaypoints, function drawGDirLine(path) {
          //  var line = new google.maps.Polyline({clickable:false,map:map,path:path});

                var flightPath = new google.maps.Polyline({
                map:map,
                path: path,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 4
              });
        });

        $scope.map = map;
        //directionsDisplay.setMap(map); 

        /*navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));

            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });

        });*/

        $scope.map = map;


      });

      


  /*  var ref = new Firebase("https://dhakabusmap.firebaseIO.com/routes/893");
    var sync = $firebase(ref);
    var syncObject = sync.$asObject();

    console.log("hello ", syncObject);
    $scope.map = map;*/

    /* new Firebase('https://dhakabusmap.firebaseIO.com/routes/893').once('value', function(snap) {
     var route = snap.val();
     console.log("selected route: ", route.path);
     console.log("waypoints", route.root);

     var waypts = [];
        var coordinates = [];
        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer();
        //parse route.path and get the waypoints
        var stopages = route.root.split("-");
        console.log("stopages array from routes", stopages);

        new Firebase('https://dhakabusmap.firebaseIO.com/stopages').on('value', function(snap) {
            console.log("retrieve stopage info from stopages", snap.val());
            
            stopages = [45,789];

              for (var i=0; i < stopages.length ; i++){

                var stop = snap.child(stopages[i]);
                var singleStop = stop.val();

                waypts.push({
                location:new google.maps.LatLng(singleStop.latitude,singleStop.longitude),
                stopover:true});

            }


            var site = new google.maps.LatLng(snap.child(stopages[0]).val().latitude,snap.child(stopages[0]).val().longitude);
            var hospital = new google.maps.LatLng(snap.child(stopages[stopages.length-1]).val().latitude,snap.child(stopages[stopages.length-1]).val().longitude);
            
            var mapOptions = {
                zoom: 16,
                center: site,
                streetViewControl:true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
              };
              var map = new google.maps.Map(document.getElementById("map"),
                  mapOptions);

            $scope.map = map;
            console.log("total waypts ", waypts.length);

                  var request = {
                  origin : site,
                  destination : hospital,
                  waypoints: waypts,
                  optimizeWaypoints: false,
                  travelMode : google.maps.TravelMode.DRIVING
              };
              directionsService.route(request, function(response, status) {
                  if (status == google.maps.DirectionsStatus.OK) {
                      directionsDisplay.setDirections(response);
                      
                  }
              });

              $scope.map = map;
              directionsDisplay.setMap(map); 
            
        });
   
    });*/

      $scope.map = map;

      /*var delay=3000;//1 seconds
      setTimeout(function(){
        $scope.map = map;
        //your code to be executed after 1 seconds
      },delay);*/


        

       /*var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: site,
          map: map,
          title: 'Source of Bus'
        });
        
        var hospitalRoute = new google.maps.Marker({
          position: hospital,
          map: map,
          title: 'Destination of Bus'
        });
        
        var infowindow = new google.maps.InfoWindow({
             content:"Project Location"
        });

        infowindow.open(map,marker);
        
        var hospitalwindow = new google.maps.InfoWindow({
             content:"Nearest Hospital"
        });

        hospitalwindow.open(map,hospitalRoute);
       
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope); */

        
       
      }
  
      //google.maps.event.addDomListener(window, 'load', initialize);
      initialize();
    
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });
        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();


          var marker = new google.maps.Marker({
              position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
              map: $scope.map,
              animation: google.maps.Animation.BOUNCE,
              title: 'Source'
            });
        
          var infowindow = new google.maps.InfoWindow({
               content:"You are Here!"
          });

          infowindow.open($scope.map,marker);

        /*  var marker = new MarkerWithLabel({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: $scope.map,
                animation: google.maps.Animation.BOUNCE,
                title: 'cool',
                labelContent: 'You Are Here',
                labelAnchor: new google.maps.Point(0, 80),
                labelClass: "labels", // the CSS class for the label
                labelStyle: {opacity: 0.75},
                
            }); */

        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
      
      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
      };
      
    })



.controller('MapCtrl4', function($scope, $ionicLoading) {
 
    google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
 
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });
 
        $scope.map = map;
    });
 
})


.controller('MapCtrl5', function($scope , $log, $http){

    $scope.map = {
      center: {
        latitude: 43.67023,
        longitude: -79.38676
      },

      zoom: 12,
      bounds: {}
    };
    
    $scope.options = {
      scrollwheel: true
    };
    
    $scope.vm = {};
    
    $scope.vm.map = {
      center: {                           
          latitude: 43.67023,
          longitude: -79.38676
      },
      zoom: 13
    };
    
    $scope.vm.markers = [{
        id : 99,
        latitude: 43.67023,
        longitude: -79.38676
      
    }];

  })



.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

