import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM8P8s_84FRy--TCMQUWpOofDgRLFyz8w",
  authDomain: "tododeportesa-65603.firebaseapp.com",
  projectId: "tododeportesa-65603",
  storageBucket: "tododeportesa-65603.appspot.com",
  messagingSenderId: "798169328992",
  appId: "1:798169328992:web:573f40f7f55472652b8205"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
