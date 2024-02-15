user_name = localStorage.getItem("user_name"); 
room_name = localStorage.getItem("room_name");

const firebaseConfig = {
      apiKey: "AIzaSyDeBIG5Esh6zg1263FkfGENjJbaUvv4J1E",
      authDomain: "kwitterpoopoopant.firebaseapp.com",
      databaseURL: "https://kwitterpoopoopant-default-rtdb.firebaseio.com",
      projectId: "kwitterpoopoopant",
      storageBucket: "kwitterpoopoopant.appspot.com",
      messagingSenderId: "909048395843",
      appId: "1:909048395843:web:095fbb79f9820231197cf6"
    };
    firebase.initializeApp(firebaseConfig)

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+  like +"</span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementsById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value = "";
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
      });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function updateLike(message_id){
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      like = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      })
}

