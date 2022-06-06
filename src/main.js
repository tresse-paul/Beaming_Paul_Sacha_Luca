import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

//Import de mitt
import mitt from 'mitt';

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBz5F18UT_tDeP360mnUzYcwZQ2WA-SXhI",
    authDomain: "beaming-911e1.firebaseapp.com",
    projectId: "beaming-911e1",
    storageBucket: "beaming-911e1.appspot.com",
    messagingSenderId: "136893551002",
    appId: "1:136893551002:web:556a515e6f2b60f3fbea23"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

// Création d'un emetteur mitt exportable
export const emitter = mitt();
app.config.globalProperties.emitter = emitter;


app.use(router)

app.mount('#app')
