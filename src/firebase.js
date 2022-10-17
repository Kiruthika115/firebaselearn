// Import the functions you need from the SDKs you need
import firebase from "firebase";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA6btGqZBAE4YyVO8C8L1RVtopwsxvrxF8",
//   authDomain: "dblearn-cb43d.firebaseapp.com",
//   databaseURL:"https://dblearn-cb43d-default-rtdb.asia-southeast1.firebasedatabase.app/",
//   projectId: "dblearn-cb43d",
//   storageBucket: "dblearn-cb43d.appspot.com",
//   messagingSenderId: "836466451623",
//   appId: "1:836466451623:web:eb93ff83d4ee0ccd472782",
//   measurementId: "G-V01M9DS09Z"
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyDrd6K6rgiDwbCb-X5ytTKtCiqLXIOk004",
//   authDomain: "testproject-50b11.firebaseapp.com",
//   databaseURL: "https://testproject-50b11-default-rtdb.firebaseio.com",
//   projectId: "testproject-50b11",
//   storageBucket: "testproject-50b11.appspot.com",
//   messagingSenderId: "869026201510",
//   appId: "1:869026201510:web:1308437873297656031967",
//   measurementId: "G-D2V5S5FNHV"
// };
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4Ak4-qFDf-_OydX8snrxNO2k4lSTEgAE",
  authDomain: "newproj-817a0.firebaseapp.com",
  databaseURL:"https://newproj-817a0-default-rtdb.firebaseio.com/",
  projectId: "newproj-817a0",
  storageBucket: "newproj-817a0.appspot.com",
  messagingSenderId: "896812038988",
  appId: "1:896812038988:web:2b0f4309ee32bc7b88ade9",
  measurementId: "G-K8534NS5FS"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb;