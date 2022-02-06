import React, { useEffect } from 'react';
import UsersForm from './Components/Users/UsersForm';
import firebase from './firebase';

function App() {
  useEffect(()=>{
    const messaging=firebase.messaging()
    messaging.getToken()
    .then((data)=>{
      console.log("token",data)
    })
    .catch((error)=>{
      console.log("Error",error)
    })
  })
  return (
    <div><UsersForm/></div>
   
  );
}

export default App;
