import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMJjwMSNNelm6Y8SvyCvjeqRyGvsHvYxg",
  authDomain: "darkomens-80ecc.firebaseapp.com",
  projectId: "darkomens-80ecc",
  storageBucket: "darkomens-80ecc.appspot.com",
  messagingSenderId: "66866394472",
  appId: "1:66866394472:web:ae0cf020adc2a8fd23d2dd",
  measurementId: "G-QQ7V7Y223K"
};

const fbApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(fbApp);

const app = createApp(App)

app.use(router)

app.mount('#app')
