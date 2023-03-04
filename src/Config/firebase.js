import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyB10czhZM6wgFr-3furt8X2mITt-cyAlFc",
    authDomain: "utn-react-3cdc0.firebaseapp.com",
    projectId: "utn-react-3cdc0",
    storageBucket: "utn-react-3cdc0.appspot.com",
    messagingSenderId: "475494250319",
    appId: "1:475494250319:web:001c4940d937f30756773a",
    measurementId: "G-M44TSZ4WH2"
};

firebase.initializeApp(firebaseConfig)

export default firebase