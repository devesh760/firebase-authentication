import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCvLxZ4Cytf2qpncJDEt7cE8SFthWSc1E4",
    authDomain: "firbase-auth-practice.firebaseapp.com",
    projectId: "firbase-auth-practice",
    storageBucket: "firbase-auth-practice.appspot.com",
    messagingSenderId: "943379956156",
    appId: "1:943379956156:web:83f0c696dc9477816a6bb9"
};

const fire = firebase.initializeApp(firebaseConfig)

export default fire;