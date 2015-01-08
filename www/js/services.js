angular.module('starter.services', ['firebase'])

/*.factory('Hello', function(){    

  var ref = new Firebase("https://dhakabusmap.firebaseIO.com/");  
  var sync = $firebase ;      
  var otherfriends = $firebase(ref).$asArray();    

  return {      
    all: function  {        
    return otherfriends;      
    },      
    get: function  {        
    // Simple index lookup        
    return otherfriends[friendId];      
    }    
  }
})*/

.factory("Hello", function($firebase) {
     // create a reference to the Firebase where we will store our data
     var ref = new Firebase("https://dhakabusmap.firebaseIO.com/test");
     return $firebase(ref).$asArray();
     // this uses AngularFire to create the synchronized array
     /*return {
      all: function(){
        $firebase(ref).$asArray();
      },
      add: function(data){
        console.log("inserting");
        $firebase(ref).$add({from: 'Noshu', body: 'Va'});
      }
    }*/
})


.factory('Chats', function() {
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://pbs.twimg.com/profile_images/479740132258361344/KaYdH9hE.jpeg'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
})

.factory('Inputs', function(){
  return myForm = [{
    firstName: "",
    lastname: ""

  }];
})

.factory('Data', function(){
  return {message:"Hello World"}
})

/*.factory('Routes', function (){

  var routes = [{
    id: 0,
    path: 'Shahbag-Farmgate-Mohakhali-Banani-Airport',
    root: '0-1-3-4-5',
    busNo: '4',
    busName: 'Hello'
  },
  {
    id:1,
    path: 'Azimpur - City College - Asad gate - Shishu Mela - Agargaon - Mirpur 10 - Mirpur 12',
    root: '1-2-3-4-9-10-11',
    busNo: '36',
    busName: 'Bikolpo/Safety'
  },
  {
    id:2,
    path: 'Azimpur - City College - Asad gate - Shyamoli - Technical - Mirpur 2 - Rupnagar',
    root: '1-2-3-5-6-7-8',
    busNo: '36',
    busName: 'Bikolpo'
  },
  {
    id:3,
    path: 'Azimpur - City College',
    root: '1-2',
    busNo: '28/B',
    busName: 'Metro Link'
  },
  {
    id:4,
    path: 'Azimpur - City College - Asad gate - Shyamoli - Technical - Mirpur 2 - Rupnagar',
    root: '1-2-3-5-6-7-8',
    busNo: '1/R',
    busName: 'Bihongo'
  },
  {
    id:5,
    path: 'Azimpur - City College - Asad gate - Shishu Mela - Agargaon - Mirpur 10 - Mirpur 14',
    root: '1-2-3-4-9-10-12',
    busNo: '12/K',
    busName: 'Nishorgo'
  },
  {
    id:6,
    path: 'Azimpur - City College - Asad gate - KhamarBari - Farmgate - Mohakhali - Kakoli - Kuril - Airport',
    root: '1-2-3-18-13-14-15-16-17',
    busNo: '3/A',
    busName: 'Shuchona/BRTC'
  }];

  return {
    all: function(){
      return routes;
    },
    get: function(routeId) {
      // Simple index lookup
      return routes[routeId];
    }

  }
})

.factory('Stopage',function(){
  var stopages = [{
    id: 0,
    name: 'Shahbag',
    latitude: '23.739086',
    longitude: '90.391036'
  },
  {
    id:1,
    name: 'Azimpur',
    latitude: '23.731317',
    longitude: '90.385364'
  },
  {
    id:2,
    name: 'City College',
    latitude: '23.739444',
    longitude: '90.383064'
  },
  {
    id:3,
    name: 'Asad Gate',
    latitude: '23.760308',
    longitude: '90.3727'
  },
  {
    id:4,
    name: 'Shishu Mela',
    latitude: '23.773086',
    longitude: '90.367431'
  },
  {
    id:5,
    name: 'Shyamoli',
    latitude: '23.774889',
    longitude: '90.365353'
  },
  {
    id:6,
    name: 'Technical',
    latitude: '23.78145',
    longitude: '90.351981'
  },
  {
    id:7,
    name: 'Mirpur-2',
    latitude: '23.804994',
    longitude: '90.363486'
  },
  {
    id:8,
    name: 'Rupnagar',
    latitude: '23.818597',
    longitude: '90.356159'
  },
  {
    id:9,
    name: 'Agargaon',
    latitude: '23.779201',
    longitude: '90.371304'
  },
  {
    id:10,
    name: 'Mirpur-10',
    latitude: '23.806739',
    longitude: '90.368567'
  },
  {
    id:11,
    name: 'Mirpur-12',
    latitude: '23.836823',
    longitude: '90.365829'
  },
  {
    id:12,
    name: 'Mirpur-14',
    latitude: '23.798319',
    longitude: '90.387406'
  },
  {
    id:13,
    name: 'Farmgate',
    latitude: '23.757242',
    longitude: '90.390022'
  },
  {
    id:14,
    name: 'Mohakhali',
    latitude: '23.778239',
    longitude: '90.397739'
  },
  {
    id:15,
    name: 'Kakoli',
    latitude: '23.795706',
    longitude: '90.400808'
  },
  {
    id:16,
    name: 'Kuril',
    latitude: '23.821189',
    longitude: '90.419569'
  },
  {
    id:17,
    name: 'Airport',
    latitude: '23.851767',
    longitude: '90.407228'
  },
  {
    id:18,
    name: 'Khamar Bari',
    latitude: '23.759474',
    longitude: '90.384346'
  }
  ];

  return {
    all: function(){
      return stopages;
    },
    get: function(rootId){
      return stopages[rootId];
    },
    add: function(stop){
      stopages.push(stop);

    }

  }
})
*/

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Ben Sparrow',
    notes: 'Enjoys drawing things',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    notes: 'Odd obsession with everything',
    face: 'https://pbs.twimg.com/profile_images/479740132258361344/KaYdH9hE.jpeg'
  }, {
    id: 2,
    name: 'Andrew Jostlen',
    notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    notes: 'I think he needs to buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    notes: 'Just the nicest guy',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
