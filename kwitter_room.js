
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room Name - " + Room_names);
     row = "<div class'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>"
     document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window. location = "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
