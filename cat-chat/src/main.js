import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDysevNkrnnGI2hOAIm0rdR_xs3TzAZkik",
  authDomain: "cat-chat-22fa4.firebaseapp.com",
  databaseURL: "https://cat-chat-22fa4.firebaseio.com",
  projectId: "cat-chat-22fa4",
  storageBucket: "cat-chat-22fa4.appspot.com",
  messagingSenderId: "10391053907",
  appId: "1:10391053907:web:280163132881178b4dc8a6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
