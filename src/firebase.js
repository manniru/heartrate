import firebase from 'firebase'
const config1 = {
  apiKey: "AIzaSyCqo3YneuLg3u7Nqr3EyAoZ-uPcMF0AjOs",
  authDomain: "realtime-portal.firebaseapp.com",
  databaseURL: "https://realtime-portal.firebaseio.com",
  projectId: "realtime-portal",
  storageBucket: "realtime-portal.appspot.com",
  messagingSenderId: "320031251851"
};

const config = {
  apiKey: "AIzaSyBpntkGpcE-noAaGkIF44hWhI6r5dB4Lqk",
  authDomain: "realtimeattendance1.firebaseapp.com",
  databaseURL: "https://realtimeattendance1.firebaseio.com",
  projectId: "realtimeattendance1",
  storageBucket: "realtimeattendance1.appspot.com",
  messagingSenderId: "258579223944"
};

firebase.initializeApp(config);
export default firebase;