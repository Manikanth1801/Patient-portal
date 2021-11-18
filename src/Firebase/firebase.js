// import firebase from './firebase';
// import 'firebase/auth';
import { initializeApp } from 'firebase/app';

var firebaseConfig = {

  apiKey: "AIzaSyDkfS_22bTU_I83t3do6KSquAH_BUHQ67o",
  authDomain: "fir-react-7d267.firebaseapp.com",
  projectId: "fir-react-7d267",
  storageBucket: "fir-react-7d267.appspot.com",
  messagingSenderId: "1078219565313",
  appId: "1:1078219565313:web:e3e157de0ce2b3c6a39300",
  measurementId: "G-47P4RJVN0D"

}
// firebase.initializeApp(firebaseConfig);
const  firebase = initializeApp(firebaseConfig);

export default firebase
