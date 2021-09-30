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

  var userInput = document.getElementById('name-input');

  function enterSite() {
        sessionStorage.setItem('username', userInput.value);
        userOutput = sessionStorage.getItem('username');
        console.log("user saved:", userOutput);
        alert('Proceed to Enter! :)')
  }

  var linkTag = document.getElementById('linkTag')

  function bringSite(){
      if (userInput.value !== ""){
        window.open("chatroom.html",'_blank');
      }else{alert('Fill in the UserName')
      
    }
  }