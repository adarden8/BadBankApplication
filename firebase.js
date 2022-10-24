const firebaseConfig = {
    apiKey: "AIzaSyBKLWST-Kc0D-o8KLumrp99HspsNHo09LQ",
    authDomain: "badbank-36017.firebaseapp.com",
    projectId: "badbank-36017",
    storageBucket: "badbank-36017.appspot.com",
    messagingSenderId: "926450787188",
    appId: "1:926450787188:web:3a49d52c75ee4b17bec221"
  };

  firebase.initializeApp(firebaseConfig);

  function createAccount(name, email, password) {
    const auth  = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email,password);
	promise.catch(e => console.log(e.message));
}




  


