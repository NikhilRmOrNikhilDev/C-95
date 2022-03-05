// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyBI-hWXiWidvvnVV3wMlGQwhcESDpkCuIs",
      authDomain: "kwitter-2c4c5.firebaseapp.com",
      databaseURL: "https://kwitter-2c4c5-default-rtdb.firebaseio.com",
      projectId: "kwitter-2c4c5",
      storageBucket: "kwitter-2c4c5.appspot.com",
      messagingSenderId: "354086969446",
      appId: "1:354086969446:web:8e7f90756285fa5e560da7",
      measurementId: "G-X9QPHMT4YD"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function changeUsername(){
      user = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome! " + user;
}