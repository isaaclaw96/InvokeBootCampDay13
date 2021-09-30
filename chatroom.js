// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq_b3C3fy2Y9-zDVI8scXxF-_Q8-jFRsY",
  authDomain: "chat-room-82bb4.firebaseapp.com",
  databaseURL: "https://chat-room-82bb4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-room-82bb4",
  storageBucket: "chat-room-82bb4.appspot.com",
  messagingSenderId: "922452809519",
  appId: "1:922452809519:web:03bfa18e2f00908fa5b3da"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
console.log(firebase);

var nameInput = document.getElementById('name');
nameInput.innerHTML = sessionStorage.getItem('username');
console.log(nameInput);
var chatInput = document.getElementById('message');
var chatRoom = document.getElementById('chat-room');

document.addEventListener('keypress', keyPressed)

//get data from firebase when start page
// firebase.database().ref('chat').child('message').on('child_added', function(snapshot){

firebase.database().ref('chat').child('message').on('child_added', function(snapshot){
    // console.log(snapshot.val())
    var nameValue = snapshot.val().name //string
    var msgValue = snapshot.val().chat //string
    var timeValue = snapshot.val().time
    // create element when firebase got new child

    var chatBox = document.createElement('div')
    chatBox.classList.add('chat-message');
    chatBox.style.display = 'column'
    if(nameValue === 'Isaac'){
        chatBox.classList.add('self');
    }

    var chatName = document.createElement('h4');
    chatName.classList.add('chat-name');
    chatName.innerHTML = nameValue;

    var chatMessage = document.createElement('p');
    chatMessage.classList.add('chat-message');
    chatMessage.innerHTML = msgValue;

    var chatTime = document.createElement('p');
    chatTime.classList.add('chat-time');
    chatTime.innerHTML = timeValue;
    chatTime.style.fontSize = '10px';
    chatTime.style.fontStyle = 'italic';

    chatBox.append(chatName);
    chatBox.append(chatMessage);
    chatBox.append(chatTime);

    chatRoom.append(chatBox);

    // console.log(chatRoom.innerHeight)
    chatRoom.scrollTo(0, chatRoom.scrollHeight);

});

function keyPressed(evt){
    if(evt.keyCode == 13){
        sendBtn();
        chatInput.value = "";
    }
}

function sendBtn(){


    // push the data and store in database
    if (chatInput.value !== "" ) {
        var currentTime = new Date();

        var nowTime = currentTime.toTimeString().substr(0,5);
        console.log(nowTime);


        firebase.database().ref('chat').child('message').push(
            { 
                name:nameInput.innerHTML,
                chat:chatInput.value,
                time:nowTime
            }
        )
    }  
    chatInput.value = "";
    
}

function returnBtn(){
    window.location.href = "chat2.html";
}
    
    
    
