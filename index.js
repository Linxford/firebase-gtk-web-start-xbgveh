// Import stylesheets
import './style.css';
// Firebase App (the core Firebase SDK) is always required
import { initializeApp } from 'firebase/app';

// Add the Firebase products and methods that you want to use
import {getAuth, EmailAuthProvider} from 'firebase/auth';
import {} from 'firebase/firestore';

import * as firebaseui from 'firebaseui';

// Document elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');

const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');
const numberAttending = document.getElementById('number-attending');
const rsvpYes = document.getElementById('rsvp-yes');
const rsvpNo = document.getElementById('rsvp-no');

let rsvpListener = null;
let guestbookListener = null;

let db, auth;

async function main() {
  // Add Firebase project configuration object here
  const firebaseConfig = {
    apiKey: "AIzaSyA8MAfbby-3AzZz5lr2gkld5fYB0LUZXlY",
    authDomain: "fir-web-codelab-a0e9d.firebaseapp.com",
    projectId: "fir-web-codelab-a0e9d",
    storageBucket: "fir-web-codelab-a0e9d.appspot.com",
    messagingSenderId: "36222195008",
    appId: "1:36222195008:web:a51b8323675eef9f0c96a5",
    measurementId: "G-5QHD13EHNN"
  };

  // initializeApp(firebaseConfig);
  initializeApp(firebaseConfig);
auth = getAuth();
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  // FirebaseUI config
  const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      // Email / Password Provider.
      EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // Handle sign-in.
        // Return false to avoid redirect.
        return false;
      },
    },
  };

  // const ui = new firebaseui.auth.AuthUI(auth);
}
async function main() {
  // ...

  // Initialize the FirebaseUI widget using Firebase
  const ui = new firebaseui.auth.AuthUI(auth);
}
main();
async function main() {
  // ...

  // Listen to RSVP button clicks
  startRsvpButton.addEventListener("click",
   () => {
        ui.start("#firebaseui-auth-container", uiConfig);
  });
}
main();
