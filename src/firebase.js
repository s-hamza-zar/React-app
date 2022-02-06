import firebase from "firebase/compat/app";
import 'firebase/compat/messaging';
import 'firebase/messaging/sw';

const firebaseConfig = {
    apiKey: "AIzaSyDH-QSlRdhrtkE1QpAUkvPzfyHeKWp8WNI",
    authDomain: "push-notification-eab4f.firebaseapp.com",
    projectId: "push-notification-eab4f",
    storageBucket: "push-notification-eab4f.appspot.com",
    messagingSenderId: "187643363843",
    appId: "1:187643363843:web:5bfc30fa8153416cc30436"
  };
firebase.initializeApp(firebaseConfig);

export default firebase