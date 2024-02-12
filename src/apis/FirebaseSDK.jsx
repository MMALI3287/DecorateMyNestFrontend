// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// console.log(environment.REACT_APP_GOOGLE_CLIENT_ID);
// TODO: Addimport { Provider } from 'react-redux';
//  SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjziHzTkPizprWEhwmoBzA6yPuKQNRwMY",
  authDomain: "decorate-my-nest.firebaseapp.com",
  projectId: "decorate-my-nest",
  storageBucket: "decorate-my-nest.appspot.com",
  messagingSenderId: "941469893271",
  appId: "1:941469893271:web:9303603953ddca15039fd2",
  measurementId: "G-2SHSLWD7TM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
