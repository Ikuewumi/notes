import { createApp } from 'vue'
import { createPinia } from 'pinia';
import {initializeApp} from "firebase/app";
import './css/fonts.css'
import './css/index.css'
import './css/article.css'
import App from './App.vue'
import router from './router/index';

const store = createPinia()

const firebaseConfig = {
	apiKey: "AIzaSyB_e2GgnW7WJaih4aB8GdpX9wK40Xo16dE",
	authDomain: "outline-app-2db50.firebaseapp.com",
	projectId: "outline-app-2db50",
	storageBucket: "outline-app-2db50.appspot.com",
	messagingSenderId: "27556098377",
	appId: "1:27556098377:web:730df0e3c08da08f40aa98",
	measurementId: "G-LV1LE9NSEW"
};
	
// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);


createApp(App)
	.use(router)
	.use(store)
	.mount('#app')


