importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('firebase-messaging-sw.js')
      .then((registration)=> {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }

firebase.initializeApp({
    messagingSenderId: "187643363843",
  })

  const initMessaging = firebase.messaging();