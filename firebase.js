const firebaseConfig = {
  apiKey: "AIzaSyAJ_vqVBZ7bJtXCPhKtGcBDzKefSsfo7hc",
  authDomain: "magic-bot-7da83.firebaseapp.com",
  databaseURL: "https://magic-bot-7da83-default-rtdb.firebaseio.com",
  projectId: "magic-bot-7da83",
  storageBucket: "magic-bot-7da83.firebasestorage.app",
  messagingSenderId: "426536016846",
  appId: "1:426536016846:web:d412ffbcd43021b98ea99f",
  measurementId: "G-GZ5VX31LBK"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const auth = firebase.auth();
