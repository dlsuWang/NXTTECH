var time = 11;

function createLobby(){
			var div = document.getElementById("lobbyCode");
			var lobbyCode = Math.floor((Math.random() * 1000) + 1);
			div.innerHTML =  "Lobby Code: " + lobbyCode;
			var firebaseRef = firebase.database().ref();
			firebaseRef.child(lobbyCode).set("empty");
			//firebaseRef.child(lobbyCode);
		}

function read(){
	document.getElementById("joinButton").disabled = true;
	var input = document.getElementById("codeInput");
	
	localStorage.setItem("lobbyCode",input.value);
	
	var ref = firebase.database().ref(input.value);

	//retunrs null if no key is found
	ref.once('value').then(function(snapshot) {
	
		//if code exists in realtime database
		if(snapshot.val() != null){
			
			//if lobby is empty or contains less than 5 players
			if(snapshot.numChildren() < 5){
				
				var name;
				
				//prompt for username
				do{
					name = prompt("Please enter your name", "Alpha");
				}while(name == null || name == "");

				
				localStorage.setItem("username",name);

				//set score and isCleared to database
				var playerNum = snapshot.numChildren() + 1;
				firebase.database().ref(input.value + '/' + playerNum).set({
					username: name, 
					score: "0",
					isCleared: "unknown",
				});
				
				
				ref.on('value', function(snapshot) {
					
					var string = "Waiting for players: " + snapshot.numChildren() + "/5";
					
					for(var i=0; i < snapshot.numChildren(); i++)
					{
						var count = i+1;
						string = string + "<br>" + snapshot.child(count + '/username').val();
					}
					
					document.getElementById("waitingforplayers").innerHTML = string;
					
					
					if(snapshot.numChildren() == 5)
					{
						setInterval(function(){ 
							if(time == 0)
							{
								clearInterval();
								
								//start game
								window.location.href = "game.html";
							}
							else
							{
								time = time - 1;
								document.getElementById("waitingforplayers").innerHTML = "Game starts in: " + time;
							}
						}, 1000);
					}
					
				});
				
			}
			else{
				
				alert("Lobby is full!");
				/*
				ref.set(Number(snapshot.val())+1);
				
				*/
				
			}
		}
		//if code does not exists in realtime database
		//else{
		//	alert("lobby not found");
		//}
	});
	
	/*ref.on('value', function(snapshot) {
		//alert(snapshot.val());
		ref.set(snapshot.val()+1);
	});
	*/
}