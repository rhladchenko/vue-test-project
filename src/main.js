import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import dateFilter from '@/filters/date.filter';
import messagePlugin from '@/utils/message.plugin';
import 'materialize-css/dist/js/materialize.min';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);

firebase.initializeApp({
  apiKey: 'AIzaSyAY2GB8-uB0gkSzkLG2dQc1-8dSlXYiR7E',
  authDomain: 'vue-tube-crm.firebaseapp.com',
  databaseURL: 'https://vue-tube-crm.firebaseio.com',
  projectId: 'vue-tube-crm',
  storageBucket: 'vue-tube-crm.appspot.com',
  messagingSenderId: '152979308696',
  appId: '1:152979308696:web:29fc18e8339e3eb42390ed',
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
