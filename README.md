# Multiplayer Volt-in Simulator with Firebase
Multiplayer Volt-in Simulator with Firebase is a 5-player web app game. Each player must clear the game before Voltes V's volt-in sequence succeeds.

## Installation
1. Clone or download the ZIP file;
2. First, go to https://firebase.google.com;
3. Sign in or create an account if you do not have one;
4. Click on "Go to console";
5. Click on "Add project", name it anything you like, select your coutry/region, and click "Create Project";
6. It should redirect you to the project's page. Click on "Add Firebase to your Web App";
7. Click on "Copy" to copy the whole thing there.
8. As for the first ```<script>``` (the one liner), in index.html, game.html, victory.html, and defeat.html, replace what's in between ```<!-- Firebase Here -->```
```
<!-- Firebase Here -->
<script src="https://www.gstatic.com/firebasejs/4.2.0/firebase.js"></script>
<!-- Firebase Here -->
``` 
9. In firebaseInit.js in the js folder, replace 
```
// Initialize Firebase
var config = {
	apiKey: "AIzaSyAD5LEi1srlvvmAMuBBZ5llYvuNjMaeq4A",
	authDomain: "nxttech-e2ff2.firebaseapp.com",
	databaseURL: "https://nxttech-e2ff2.firebaseio.com",
	projectId: "nxttech-e2ff2",
	storageBucket: "nxttech-e2ff2.appspot.com",
	messagingSenderId: "591776999891"
};

firebase.initializeApp(config);
```
with the contents of the second ```<script>``` block of code that also says ```// Initialize Firebase```;

