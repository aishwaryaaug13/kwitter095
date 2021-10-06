var firebaseConfig = {
	apiKey: "AIzaSyAgkeVo-QV7PGrAl0Z5KxS3-FMMG-EwQ4A",
	authDomain: "kwitter-48e92.firebaseapp.com",
	databaseURL: "https://kwitter-48e92-default-rtdb.firebaseio.com",
	projectId: "kwitter-48e92",
	storageBucket: "kwitter-48e92.appspot.com",
	messagingSenderId: "270780495572",
	appId: "1:270780495572:web:753bdf956d81502dc62d41",
	measurementId: "G-8YD1TMV4QX"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function getData() {
	firebase.database().ref("/").on('value', function (snapshot) {
		document.getElementById("output").innerHTML = "";
		snapshot.forEach(function (childSnapshot) {
			childKey = childSnapshot.key;
			Room_names = childKey;
		console.log("Room name"+Room_names );	
row ="<div class ='room_name' id ="+Room_names+"onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;			
			
			
			
		});
	});
}
getData();
function redirectToRoomName(name) {
console.log(name);
localStorage.setitem("room_name",name);
	window.location="kwitter_page.html";
	}
function addRoom (){
room_name=document.getElementById("room_name").value;	
firbase.database().ref("/").child(room_name).update({
	purpose:"adding room name"
});	
localStorage.setItem("room_name",room_name)	;
window.location="kwitter_page.html"	;
	}